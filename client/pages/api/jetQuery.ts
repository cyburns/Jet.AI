import prisma from "./prismaClient";

export const getAllJets = async () => {
  try {
    const response = await prisma.jet.findMany();
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};
