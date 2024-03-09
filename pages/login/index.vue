<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

useHead({
  title: "Nuxt Boilerplate - Login",
  meta: [{ name: "description", content: "Login page" }],
  bodyAttrs: {
    // Add a class to the body tag
    class: "login",
  },
});
// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
);

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6).regex(passwordValidation, {
    message:
      "Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
  }),
});
type Schema = z.infer<typeof schema>;
const validationSchema = toTypedSchema(schema);
const onSubmit = (values: Schema) => {
  console.log(values);
};
</script>

<template>
  <div>
    <NuxtPage />
    <HeroTitle title="Login" definition="This is the login page." />
    <section class="flex flex-col max-w-[350px]">
      <VeeForm :validation-schema="validationSchema" @submit="onSubmit">
        <UiFormInput label="Email" name="email" />
        <UiFormInput label="Password" name="password" type="password" />
        <button class="px-4 py-1 border rounded">Send</button>
      </VeeForm>
    </section>
  </div>
</template>
