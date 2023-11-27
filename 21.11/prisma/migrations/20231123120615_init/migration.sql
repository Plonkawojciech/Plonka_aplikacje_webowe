/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatarUrl` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bannerUrl` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayName` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `avatarUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `bannerUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `bio` VARCHAR(191) NOT NULL,
    ADD COLUMN `displayName` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `name`,
    DROP COLUMN `surname`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
