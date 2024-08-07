import { connectMongoDB } from "@/libs/MongoConnect"
import Product from "@/libs/models/Product"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {


        const body = await request.json();
        const {imgSrc, fileKey, name, category,desc,  price} = body;
        
        await connectMongoDB()

        const data = await Product.create({
            imgSrc, fileKey, name, category, desc, price
        })
        return NextResponse.json({msg: "Product added successfully", data});

    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something Went Wrong"
        }, {status: 400})
    }
}