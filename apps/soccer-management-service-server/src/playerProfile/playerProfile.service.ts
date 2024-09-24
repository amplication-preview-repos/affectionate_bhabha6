import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerProfileServiceBase } from "./base/playerProfile.service.base";

@Injectable()
export class PlayerProfileService extends PlayerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
