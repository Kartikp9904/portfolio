import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
    try {
        const { resources } = await cloudinary.search
            .expression('folder:RandomClicks')
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute();

        const images = resources.map((file: any) => ({
            src: file.secure_url,
            alt: file.filename || 'Gallery Image',
            caption: file.context?.custom?.caption || 'Untitled', // Cloudinary allows custom metadata
            width: file.width, // Cloudinary returns dimensions
            height: file.height,
        }));

        return NextResponse.json(images);
    } catch (error) {
        console.error('Cloudinary API Error:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
