-- CreateTable
CREATE TABLE "Team" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type1" TEXT NOT NULL,
    "type2" TEXT,
    "selected" BOOLEAN,
    "team_id" UUID,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
