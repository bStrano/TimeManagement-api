import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Subcategory from "./Subcategory";

@Entity({name: "CATEGORY"})
export default class Category {
    @PrimaryGeneratedColumn({name: "ID"})
    id?: number
    @Column({name: "NAME"})
    name?: string
    @OneToMany(type => Subcategory, subcategory => subcategory.category)
    subcategories: Subcategory[]

    constructor(name: string, subcategories: Subcategory[], id?: number) {
        this.id = id;
        this.name = name;
        this.subcategories = subcategories;
    }
}
