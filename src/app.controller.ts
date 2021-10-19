import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  createHuman() {
    return this.prisma.human.create({ data: {} });
  }

  createCat() {
    return this.prisma.cat.create({
      data: {},
    });
  }

  connectCatToHumanFailing(id_cat: string, id_human: string) {
    return this.prisma.cat.update({
      where: { id: id_cat },
      data: { human: { disconnect: false, connect: { id: id_human } } },
    });
  }

  connectCatToHumanWorking(id_cat: string, id_human: string) {
    return this.prisma.cat.update({
      where: { id: id_cat },
      data: { human: { connect: { id: id_human } } },
    });
  }
}
