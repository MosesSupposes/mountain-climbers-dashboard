/*
  Warnings:

  - Added the required column `mission` to the `ProductVisionDocument` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductVisionDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productManager" TEXT NOT NULL DEFAULT 'Moses A. Samuel',
    "mission" TEXT NOT NULL,
    "problemCore" TEXT NOT NULL,
    "kanbanBoardLink" TEXT,
    "wireframeLink" TEXT,
    "codebaseLink" TEXT,
    "stagedProductUrl" TEXT,
    "deployedProductUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ProductVisionDocument" ("codebaseLink", "createdAt", "deployedProductUrl", "id", "kanbanBoardLink", "problemCore", "productDescription", "productManager", "productName", "stagedProductUrl", "updatedAt", "wireframeLink") SELECT "codebaseLink", "createdAt", "deployedProductUrl", "id", "kanbanBoardLink", "problemCore", "productDescription", "productManager", "productName", "stagedProductUrl", "updatedAt", "wireframeLink" FROM "ProductVisionDocument";
DROP TABLE "ProductVisionDocument";
ALTER TABLE "new_ProductVisionDocument" RENAME TO "ProductVisionDocument";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
