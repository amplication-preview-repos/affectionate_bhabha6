import { Module } from "@nestjs/common";
import { PlayerProfileModuleBase } from "./base/playerProfile.module.base";
import { PlayerProfileService } from "./playerProfile.service";
import { PlayerProfileController } from "./playerProfile.controller";
import { PlayerProfileResolver } from "./playerProfile.resolver";

@Module({
  imports: [PlayerProfileModuleBase],
  controllers: [PlayerProfileController],
  providers: [PlayerProfileService, PlayerProfileResolver],
  exports: [PlayerProfileService],
})
export class PlayerProfileModule {}
