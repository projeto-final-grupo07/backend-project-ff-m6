import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Contacts {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string
}
