import { productModel } from "../models/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    return res.status(200).json({
      ok: true,
      message: "productos obtenidos exitosamente",
      data: products
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el getAllProducts: ${error}`
    })
  }
};

export const createProduct = async (req, res) => {
  try {
    // name, slug, description, basePrice, category, variants
    // variants: sku, attributes, priceModifier, stock 
    const { name, slug, description, base_price, category, variants } = req.body;
    const imagePaths = req.files.map(file => file.filename);

    const newProduct = await productModel.create({
      name: name,
      slug: slug,
      description: description,
      base_price: base_price,
      category: category,
      variants: variants,
      images: imagePaths
      
    })


    return res.status(200).json({
      ok: true,
      message: "producto creado exitosamente",
      data: newProduct
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el createProduct: ${error}`
    })
  }
};

export const updateProduct = (req, res) => {
  try {
    return res.status(200).json({
      ok: true,
      message: "producto actualizado exitosamente"
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el updateProduct: ${error}`
    })
  }
};

export const deleteProduct = (req, res) => {
  try {
    return res.status(200).json({
      ok: true,
      message: "producto eliminado exitosamente"
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: `error interno en el deleteProduct: ${error}`
    })
  }
};
