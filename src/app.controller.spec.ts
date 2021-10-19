import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('working', () => {
    it('should create instance of human and cat (that is then connected to the human)"', async () => {
      const human = await appController.createHuman();
      const cat = await appController.createCat();
      const connectedCat = await appController.connectCatToHumanWorking(
        cat.id,
        human.id,
      );

      expect(connectedCat.id_human).toBe(human.id);
    });
  });

  describe('failing', () => {
    it('should create instance of human and cat (that is then connected to the human)"', async () => {
      const human = await appController.createHuman();
      const cat = await appController.createCat();
      const connectedCat = await appController.connectCatToHumanFailing(
        cat.id,
        human.id,
      );

      expect(connectedCat.id_human).toBe(human.id);
    });
  });
});
