"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const SetBudget = z.object({
  amount: z.string().min(1),
  date: z.string().min(6),
});

export const saveEmployee = async (prevSate: any, formData: FormData) => {
  const data: { [key: string]: any } = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const validatedFields = SetBudget.safeParse(data);

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    console.log("success");
  } catch (error) {
    return { message: "Failed to set a budget." };
  }
};









//   try {
//     await prisma.employee.create({
//       data: {
//         name: validatedFields.data.name,
//         email: validatedFields.data.email,
//         phone: validatedFields.data.phone,
//       },
//     });
//
//   } catch (error) {
//     return { message: "Failed to create new employee" };
//   }
//
//   revalidatePath("/employee");
//   redirect("/employee");
// };
//
// export const getEmployeelist = async (query: string) => {
//   try {
//     const employees = await prisma.employee.findMany({
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         phone: true,
//         createdAt: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return employees;
//   } catch (error) {
//     throw new Error("Failed to fetch employees data");
//   }
// };
// export const getEmployeeById = async (id: string) => {
//   try {
//     const employee = await prisma.employee.findUnique({
//       where: { id },
//     });
//     return employee;
//   } catch (error) {
//     throw new Error("Failed to fetch contact data");
//   }
// };
//
// export const updateEmployee = async (
//   id: string,
//   prevSate: any,
//   formData: FormData
// ) => {
//   const validatedFields = SetBudget.safeParse(
//     Object.fromEntries(formData.entries())
//   );
//
//   if (!validatedFields.success) {
//     return {
//       Error: validatedFields.error.flatten().fieldErrors,
//     };
//   }
//
//   try {
//     await prisma.employee.update({
//       data: {
//         name: validatedFields.data.name,
//         email: validatedFields.data.email,
//         phone: validatedFields.data.phone,
//       },
//       where: { id },
//     });
//   } catch (error) {
//     return { message: "Failed to update employee" };
//   }
//
//   revalidatePath("/employee");
//   redirect("/employee");
// };
//
// export const deleteEmployee = async (id: string) => {
//   try {
//     await prisma.employee.delete({
//       where: { id },
//     });
//   } catch (error) {
//     return { message: "Failed to delete employee" };
//   }
//
//   revalidatePath("/employee");
// };
