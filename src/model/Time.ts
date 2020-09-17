import {Column, Entity, PrimaryGeneratedColumn, Timestamp} from "typeorm";

@Entity("TIME")
class Time {
    @PrimaryGeneratedColumn({name: "ID"})
    id?: number;
    @Column({name: "SECONDS"})
    seconds: number;
    @Column({name: "CREATED_AT"})
    createdAt: Date
    @Column({name: "ENDED_AT", type: "timestamp"})
    endedAt: Date | null


    constructor(seconds: number, createdAt: Date, endedAt: Date | null, id: number,) {
        this.id = id;
        this.seconds = seconds;
        this.createdAt = createdAt;
        this.endedAt = endedAt;
    }
}

export default Time;