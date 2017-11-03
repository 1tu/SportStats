import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { PermissionEntity } from '../permission/permission.entity';
import { AEntityBase } from '../../common/entity';

@Entity()
export class RoleEntity extends AEntityBase {
  @Column({ length: 40, unique: true, nullable: false })
  name: string;

  @ManyToMany(type => PermissionEntity)
  @JoinTable()
  permissionList: PermissionEntity[];
}
