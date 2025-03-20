import { computed, inject, provide, reactive } from "vue"

const toasts = reactive({
  "top-right": [],
  "top-left": [],
  "top-center": [],
  "bottom-right": [],
  "bottom-left": [],
  "bottom-center": [],
})

const positions = computed(() => Object.keys(toasts))
const timers = new Map()
const toastContainers = new Map()

function getToastContainer(position) {
  if (toastContainers.has(position)) {
    return toastContainers.get(position)
  }

  const container = document.createElement("div")
  container.id = `toast-container-${position}`
  container.classList.add("ded-toast-container", `ded-toast-${position}`)
  document.body.appendChild(container)
  toastContainers.set(position, container)

  return container
}

function removeToastById(id, position) {
  if (!toasts[position])
    return

  if (timers.has(id)) {
    clearTimeout(timers.get(id))
    timers.delete(id)
  }

  const index = toasts[position].findIndex(toast => toast.id === id)
  if (index !== -1) {
    toasts[position].splice(index, 1)
  }
}

function addToast(toast) {
  const id = `toast-${crypto.randomUUID()}`
  const position = toast.position || "top-right"

  if (!Array.isArray(toasts[position])) {
    toasts[position] = reactive([])
  }

  getToastContainer(position)

  const newToast = {
    ...toast,
    id,
    action: toast.action || null,
  }

  toasts[position].push(newToast)

  if (toast.duration && toast.duration > 0) {
    const timer = setTimeout(() => {
      removeToastById(id, position)
    }, toast.duration)

    timers.set(id, timer)
  }
}

function clearAllToasts() {
  timers.forEach(timer => clearTimeout(timer))
  timers.clear()

  Object.keys(toasts).forEach((position) => {
    toasts[position].splice(0, toasts[position].length)
  })
}

// **讓 `useToast()` 本身可以 inject 或 provide**
export function useToast() {
  const injectedToast = inject("useToast", null)

  if (injectedToast) {
    return injectedToast // 如果已經有 `provide` 過，就直接回傳
  }

  const toastMethods = {
    add: addToast,
    remove: removeToastById,
    clear: clearAllToasts,
    toasts,
    positions,
  }

  // **自己 provide 自己**
  provide("useToast", toastMethods)

  return toastMethods
}
