/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

const Router = require('koa-router')
const { getAllVariable, getFunctionVariable, addVariable, editVariable, deleteVariable, uploadImage, updatePageBuildInVariable } = require('../controller/variable')

const router = new Router({
    prefix: '/api/variable'
})

router.get('/getAllVariable', getAllVariable)
router.post('/getFunctionVariable', getFunctionVariable)
router.put('/addVariable', addVariable)
router.post('/editVariable', editVariable)
router.delete('/deleteVariable', deleteVariable)
router.post('/uploadImage', uploadImage)
router.post('/updatePageBuildInVariable', updatePageBuildInVariable)

module.exports = router