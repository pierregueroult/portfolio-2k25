import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import type { PrismaClient } from "@prisma/client";

interface GlobalWithPrisma extends Global {
  prismaGlobal?: PrismaClient;
}

describe("Prisma Client Singleton", () => {
  const originalEnv = process.env.NODE_ENV;

  beforeEach(() => {
    (globalThis as GlobalWithPrisma).prismaGlobal = undefined;
    vi.resetModules();
  });

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it("should create a new PrismaClient instance", async () => {
    const { default: prisma } = await import("../../src/database");
    expect(prisma).toBeDefined();
    expect(prisma).toHaveProperty("$connect");
    expect(prisma).toHaveProperty("$disconnect");
  });

  it("should return the same instance on multiple imports", async () => {
    const { default: prisma1 } = await import("../../src/database");
    const { default: prisma2 } = await import("../../src/database");
    expect(prisma1).toBe(prisma2);
  });

  it("should store the instance in globalThis in non-production environments", async () => {
    process.env.NODE_ENV = "development";
    const { default: prisma } = await import("../../src/database");
    expect((globalThis as GlobalWithPrisma).prismaGlobal).toBeDefined();
    expect((globalThis as GlobalWithPrisma).prismaGlobal).toBe(prisma);
  });

  it("should not store the instance in globalThis in production environment", async () => {
    process.env.NODE_ENV = "production";
    await import("../../src/database");
    expect((globalThis as GlobalWithPrisma).prismaGlobal).toBeUndefined();
  });
});
