import Time from "./Time";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "ROUTINE"})
export default class Routine {
    @PrimaryGeneratedColumn({name: "ID"})
    id?: number;
    @Column({name: "NAME"})
    name: string;
    @ManyToMany(type => Time)
    @JoinTable({
        name: "ROUTINE_TIME",
        inverseJoinColumns: [{name: "TIME_ID"}],
        joinColumns: [{name: "ROUTINE_ID"}]

    })
    times: Time[]


    constructor(id: number, name: string, times: Time[]) {
        this.id = id;
        this.name = name;
        this.times = times;
    }
}
