import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1605692728332 implements MigrationInterface {
    name = 'Initial1605692728332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "isSuperAdmin" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "slip" ("id" SERIAL NOT NULL, "processed" boolean NOT NULL DEFAULT false, "active" boolean NOT NULL DEFAULT true, "initialQueueSize" integer NOT NULL, "userId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "queueId" integer, CONSTRAINT "PK_c39db5434c5f16bf62bb7242e95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "queue" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4adefbd9c73b3f9a49985a5529f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin_queue" ("userId" integer NOT NULL, "queueId" integer NOT NULL, CONSTRAINT "PK_c2de20d4b3fd8d473da27c132d5" PRIMARY KEY ("userId", "queueId"))`);
        await queryRunner.query(`ALTER TABLE "slip" ADD CONSTRAINT "FK_15f5ad49296a7e865e19a201952" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "slip" ADD CONSTRAINT "FK_1c39cc78eab5f3c3bb5fcfba5d0" FOREIGN KEY ("queueId") REFERENCES "queue"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin_queue" ADD CONSTRAINT "FK_6ccf78730118df1a8f8af9a18d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin_queue" ADD CONSTRAINT "FK_af97a9932f558a5cd0fd6eb40e0" FOREIGN KEY ("queueId") REFERENCES "queue"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_queue" DROP CONSTRAINT "FK_af97a9932f558a5cd0fd6eb40e0"`);
        await queryRunner.query(`ALTER TABLE "admin_queue" DROP CONSTRAINT "FK_6ccf78730118df1a8f8af9a18d7"`);
        await queryRunner.query(`ALTER TABLE "slip" DROP CONSTRAINT "FK_1c39cc78eab5f3c3bb5fcfba5d0"`);
        await queryRunner.query(`ALTER TABLE "slip" DROP CONSTRAINT "FK_15f5ad49296a7e865e19a201952"`);
        await queryRunner.query(`DROP TABLE "admin_queue"`);
        await queryRunner.query(`DROP TABLE "queue"`);
        await queryRunner.query(`DROP TABLE "slip"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
