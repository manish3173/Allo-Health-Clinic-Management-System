"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const queue_entity_1 = require("./entities/queue.entity");
let QueueService = class QueueService {
    constructor(queueRepository) {
        this.queueRepository = queueRepository;
    }
    async getCurrentQueue() {
        return this.queueRepository.find({
            where: { status: 'WAITING' },
            order: { priority: 'DESC', createdAt: 'ASC' },
        });
    }
    async addToQueue(patientData) {
        const lastQueue = await this.queueRepository.find({
            order: { queueNumber: 'DESC' },
            take: 1,
        });
        const newQueueNumber = lastQueue.length > 0 ? lastQueue[0].queueNumber + 1 : 1;
        const queueItem = this.queueRepository.create(Object.assign(Object.assign({}, patientData), { queueNumber: newQueueNumber, status: 'WAITING', createdAt: new Date() }));
        return this.queueRepository.save(queueItem);
    }
    async updateStatus(id, status) {
        await this.queueRepository.update(id, { status });
        return this.queueRepository.findOne({ where: { id } });
    }
};
exports.QueueService = QueueService;
exports.QueueService = QueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(queue_entity_1.Queue)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QueueService);
//# sourceMappingURL=queue.service.js.map