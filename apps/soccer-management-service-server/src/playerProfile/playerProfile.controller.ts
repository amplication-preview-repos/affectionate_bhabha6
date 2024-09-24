import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerProfileService } from "./playerProfile.service";
import { PlayerProfileControllerBase } from "./base/playerProfile.controller.base";

@swagger.ApiTags("playerProfiles")
@common.Controller("playerProfiles")
export class PlayerProfileController extends PlayerProfileControllerBase {
  constructor(protected readonly service: PlayerProfileService) {
    super(service);
  }
}
