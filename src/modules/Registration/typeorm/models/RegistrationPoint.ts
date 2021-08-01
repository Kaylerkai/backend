import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('registrationPoint')
export default class RegistionPoint {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  namePoint: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  whatsapp: number;

  @Column({ name: 'responsible_name' }) // js pattern
  responsibleName: string;

  @Column()
  typePoint: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
