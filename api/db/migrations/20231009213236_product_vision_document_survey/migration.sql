-- CreateTable
CREATE TABLE "Stakeholder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "organizationName" TEXT,
    "phoneNumber" TEXT,
    "website" TEXT
);

-- CreateTable
CREATE TABLE "ProductVisionDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productManager" TEXT NOT NULL DEFAULT 'Moses A. Samuel',
    "problemCore" TEXT NOT NULL,
    "kanbanBoardLink" TEXT,
    "wireframeLink" TEXT,
    "codebaseLink" TEXT,
    "stagedProductUrl" TEXT,
    "deployedProductUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ProblemSideEffect" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "pvdId" INTEGER NOT NULL,
    CONSTRAINT "ProblemSideEffect_pvdId_fkey" FOREIGN KEY ("pvdId") REFERENCES "ProductVisionDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Objective" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "pvdId" INTEGER NOT NULL,
    CONSTRAINT "Objective_pvdId_fkey" FOREIGN KEY ("pvdId") REFERENCES "ProductVisionDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PVDStakeholders" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PVDStakeholders_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductVisionDocument" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PVDStakeholders_B_fkey" FOREIGN KEY ("B") REFERENCES "Stakeholder" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Stakeholder_email_key" ON "Stakeholder"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PVDStakeholders_AB_unique" ON "_PVDStakeholders"("A", "B");

-- CreateIndex
CREATE INDEX "_PVDStakeholders_B_index" ON "_PVDStakeholders"("B");
