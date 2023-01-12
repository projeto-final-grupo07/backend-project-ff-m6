-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_vehicle_id_fkey";

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
