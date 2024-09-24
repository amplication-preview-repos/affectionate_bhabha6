import * as graphql from "@nestjs/graphql";
import { PlayerProfileResolverBase } from "./base/playerProfile.resolver.base";
import { PlayerProfile } from "./base/PlayerProfile";
import { PlayerProfileService } from "./playerProfile.service";

@graphql.Resolver(() => PlayerProfile)
export class PlayerProfileResolver extends PlayerProfileResolverBase {
  constructor(protected readonly service: PlayerProfileService) {
    super(service);
  }
}
