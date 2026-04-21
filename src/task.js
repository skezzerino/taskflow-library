// Task management module
// Consider adding a maximum limit for labels (e.g., 5 per task)
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
        this.priority = 'medium';
    }
    setPriority(priority) {
        const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
            this.priority = priority;
        return true;
        }
        return false;
    }  
    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }
}

this.labels = [];

addLabel(label) {
    if (label && !this.labels.includes(label)) {
        this.labels.push(label);
    }
}

module.exports = Task;
