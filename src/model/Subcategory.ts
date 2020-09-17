import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import Category from "./Category";


@Entity({name: "SUBCATEGORY"})
export default class Subcategory {
    @PrimaryGeneratedColumn({name: "ID"})
    id?: number;
    @Column({name: "NAME"})
    name: string
    @ManyToOne(type => Category, category => category.subcategories)
    @JoinColumn({name: "CATEGORY_ID"})
    category: Category


    constructor(name: string, category: Category, id?: number) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}
