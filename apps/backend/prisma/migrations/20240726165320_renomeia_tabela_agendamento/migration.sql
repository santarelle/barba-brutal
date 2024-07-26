/*
  Warnings:

  - You are about to drop the `Agendamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_profissionalId_fkey";

-- DropForeignKey
ALTER TABLE "_AgendamentoToServico" DROP CONSTRAINT "_AgendamentoToServico_A_fkey";

-- DropTable
DROP TABLE "Agendamento";

-- CreateTable
CREATE TABLE "agendamento" (
    "id" SERIAL NOT NULL,
    "emailCliente" TEXT NOT NULL,
    "data" TIMESTAMPTZ(3) NOT NULL,
    "profissionalId" INTEGER NOT NULL,

    CONSTRAINT "agendamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "agendamento" ADD CONSTRAINT "agendamento_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgendamentoToServico" ADD CONSTRAINT "_AgendamentoToServico_A_fkey" FOREIGN KEY ("A") REFERENCES "agendamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
