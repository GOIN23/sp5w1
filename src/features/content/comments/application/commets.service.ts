import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../infrastructure/comments-repository';

@Injectable()
export class CommentsService {
    constructor(protected commentsRepository: CommentsRepository) { }

   

}