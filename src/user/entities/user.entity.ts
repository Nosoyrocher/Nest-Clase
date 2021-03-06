import {PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, BeforeUpdate, Column, Entity} from 'typeorm';
import {hash} from 'bcryptjs';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length:255, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 128, nullable: false, select: false})
    password: string;

    @Column({ type: 'bool', default: true })
    status:boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
    createdAt: Date; 
     
   

   // @BeforeInsert()
    // @BeforeUpdate()
    // async hashPassword(){
       // if (!this.password){
         //   return; 
        //}
        //this.password = await hash(this.password, 10);
    // }
    
}
