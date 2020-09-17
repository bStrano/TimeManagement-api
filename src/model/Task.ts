import Category from "./Category";
import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity({"name": "TASK"})
export default class Task {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column({name: "NAME"})
    name: string;
    @OneToOne(type => Category)
    @JoinColumn({name: "CATEGORY_ID"})
    category: Category;


    constructor(name: string, category: Category, id?: number) {
        this.name = name;
        this.category = category;
        this.id = id;
    }
}