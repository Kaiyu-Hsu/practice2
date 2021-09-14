<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <button type="button" class="btn-close" @click="close">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.41387 7.99988L15.2069 2.20687C15.5969 1.81687 15.5969 1.18388 15.2069 0.792875C14.8169 0.401875 14.1839 0.402875 13.7929 0.792875L7.99988 6.58588L2.20687 0.792875C1.81687 0.402875 1.18388 0.402875 0.792875 0.792875C0.401875 1.18288 0.402875 1.81587 0.792875 2.20687L6.58588 7.99988L0.792875 13.7929C0.402875 14.1829 0.402875 14.8159 0.792875 15.2069C0.987875 15.4019 1.24287 15.4999 1.49987 15.4999C1.75687 15.4999 2.01187 15.4019 2.20687 15.2069L7.99988 9.41387L13.7929 15.2069C13.9879 15.4019 14.2429 15.4999 14.4999 15.4999C14.7569 15.4999 15.0119 15.4019 15.2069 15.2069C15.5969 14.8169 15.5969 14.1839 15.2069 13.7929L9.41387 7.99988Z"
              fill="#FF6600"
            />
          </svg>
        </button>
        <slot name="header"></slot>
      </div>

      <div class="modal-body">
        <slot name="body">
          <img
            src="https://www.meme-arsenal.com/memes/7ebba8a69f65afdf9f1f9f5ea7f3169f.jpg"
          />
        </slot>
      </div>

      <footer class="modal-footer">
        <!-- <slot name="footer">This is the default footer!</slot> -->
        <button type="button" class="btn-green" @click="close">
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  top: 54px;
  width: 600px;
  height: 300px;
  border-radius: 14px;
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 27px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #e6ecf0;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid red;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 15px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.btn-close {
  position: absolute;
  left: 19.5px;
  top: 19.5px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
