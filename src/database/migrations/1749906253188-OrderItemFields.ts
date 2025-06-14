import { MigrationInterface, QueryRunner } from 'typeorm';

export class OrderItemFields1749906253188 implements MigrationInterface {
  name = 'OrderItemFields1749906253188';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "unitPrice" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "quantity" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "productId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "orderId" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`,
    );
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "orderId"`);
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "productId"`);
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "quantity"`);
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "unitPrice"`);
  }
}
