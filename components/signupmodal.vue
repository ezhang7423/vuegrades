<template>
  <div>
    <v-card class="px-4 py-6"
      ><v-card-title style="cursor: pointer" @click="switchMode">{{
        mode
      }}</v-card-title>
      <v-card-text>
        <v-text-field
          v-if="mode === 'Signup'"
          v-model="email"
          label="Email"
        ></v-text-field>
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          @keyup.enter="submit"
          label="Password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <div class="d-flex justify-end max-width">
          <v-btn text color="green" @click="submit">Enter</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "Login",
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    async submit() {
      if (this.mode === "Login") {
        await this.login();
      } else {
        await this.signUp();
      }
      if (this.$parse.User.current()) {
        this.$emit("close");
      }
    },
    async login() {
      try {
        var user = await this.$parse.User.logIn(this.username, this.password);
        console.log(user);
      } catch (e) {
        console.error(e);
        this.$toast.error(e.message);
      }
    },
    async signUp() {
      // Create a new instance of the user class

      var user = new this.$parse.User();
      user.set("username", this.username);
      user.set("password", this.password);
      user.set("email", this.email);

      try {
        await user.signUp();
      } catch (e) {
        console.error(e);
        this.$toast.error(e.message);
      }
    },
    switchMode() {
      this.mode = this.mode === "Signup" ? "Login" : "Signup";
    },
  },
};
</script>

<style>
</style>