import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({ required: true })
    _id: number;
    @Prop({ required: true })
    type: string;
    @Prop({ required: true })
    amount: number;
    @Prop({ required: true })
    action: string;
    @Prop({ required: true })
    active: boolean
    @Prop({ required: true })
    linked: boolean
    @Prop({ required: true })
    selectedColor: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product)