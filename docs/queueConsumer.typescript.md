# `queueConsumer` Submodule <a name="`queueConsumer` Submodule" id="@cdktf/provider-cloudflare.queueConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QueueConsumer <a name="QueueConsumer" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer cloudflare_queue_consumer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

new queueConsumer.QueueConsumer(scope: Construct, id: string, config: QueueConsumerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig">QueueConsumerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig">QueueConsumerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetConsumerId">resetConsumerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetDeadLetterQueue">resetDeadLetterQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.putSettings"></a>

```typescript
public putSettings(value: QueueConsumerSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---

##### `resetConsumerId` <a name="resetConsumerId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetConsumerId"></a>

```typescript
public resetConsumerId(): void
```

##### `resetDeadLetterQueue` <a name="resetDeadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetDeadLetterQueue"></a>

```typescript
public resetDeadLetterQueue(): void
```

##### `resetScriptName` <a name="resetScriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetScriptName"></a>

```typescript
public resetScriptName(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

queueConsumer.QueueConsumer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

queueConsumer.QueueConsumer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

queueConsumer.QueueConsumer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

queueConsumer.QueueConsumer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QueueConsumer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QueueConsumer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QueueConsumer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QueueConsumer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference">QueueConsumerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerIdInput">consumerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueueInput">deadLetterQueueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueIdInput">queueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptNameInput">scriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerId">consumerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueue">deadLetterQueue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settings"></a>

```typescript
public readonly settings: QueueConsumerSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference">QueueConsumerSettingsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `consumerIdInput`<sup>Optional</sup> <a name="consumerIdInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerIdInput"></a>

```typescript
public readonly consumerIdInput: string;
```

- *Type:* string

---

##### `deadLetterQueueInput`<sup>Optional</sup> <a name="deadLetterQueueInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueueInput"></a>

```typescript
public readonly deadLetterQueueInput: string;
```

- *Type:* string

---

##### `queueIdInput`<sup>Optional</sup> <a name="queueIdInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueIdInput"></a>

```typescript
public readonly queueIdInput: string;
```

- *Type:* string

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptNameInput"></a>

```typescript
public readonly scriptNameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | QueueConsumerSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `consumerId`<sup>Required</sup> <a name="consumerId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerId"></a>

```typescript
public readonly consumerId: string;
```

- *Type:* string

---

##### `deadLetterQueue`<sup>Required</sup> <a name="deadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QueueConsumerConfig <a name="QueueConsumerConfig" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.Initializer"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

const queueConsumerConfig: queueConsumer.QueueConsumerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.accountId">accountId</a></code> | <code>string</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.queueId">queueId</a></code> | <code>string</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.consumerId">consumerId</a></code> | <code>string</code> | A Resource identifier. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.deadLetterQueue">deadLetterQueue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.scriptName">scriptName</a></code> | <code>string</code> | Name of a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#settings QueueConsumer#settings}. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#type QueueConsumer#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#account_id QueueConsumer#account_id}

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#queue_id QueueConsumer#queue_id}

---

##### `consumerId`<sup>Optional</sup> <a name="consumerId" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.consumerId"></a>

```typescript
public readonly consumerId: string;
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#consumer_id QueueConsumer#consumer_id}

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}.

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

Name of a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#script_name QueueConsumer#script_name}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.settings"></a>

```typescript
public readonly settings: QueueConsumerSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#settings QueueConsumer#settings}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#type QueueConsumer#type}.

---

### QueueConsumerSettings <a name="QueueConsumerSettings" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.Initializer"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

const queueConsumerSettings: queueConsumer.QueueConsumerSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.batchSize">batchSize</a></code> | <code>number</code> | The maximum number of messages to include in a batch. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | Maximum number of concurrent consumers that may consume from this Queue. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of retries. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxWaitTimeMs">maxWaitTimeMs</a></code> | <code>number</code> | The number of milliseconds to wait for a batch to fill up before attempting to deliver it. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.retryDelay">retryDelay</a></code> | <code>number</code> | The number of seconds to delay before making the message available for another attempt. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.visibilityTimeoutMs">visibilityTimeoutMs</a></code> | <code>number</code> | The number of milliseconds that a message is exclusively leased. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

The maximum number of messages to include in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#batch_size QueueConsumer#batch_size}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

Maximum number of concurrent consumers that may consume from this Queue.

Set to `null` to automatically opt in to the platform's maximum (recommended).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#max_concurrency QueueConsumer#max_concurrency}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#max_retries QueueConsumer#max_retries}

---

##### `maxWaitTimeMs`<sup>Optional</sup> <a name="maxWaitTimeMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxWaitTimeMs"></a>

```typescript
public readonly maxWaitTimeMs: number;
```

- *Type:* number

The number of milliseconds to wait for a batch to fill up before attempting to deliver it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#max_wait_time_ms QueueConsumer#max_wait_time_ms}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

The number of seconds to delay before making the message available for another attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#retry_delay QueueConsumer#retry_delay}

---

##### `visibilityTimeoutMs`<sup>Optional</sup> <a name="visibilityTimeoutMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.visibilityTimeoutMs"></a>

```typescript
public readonly visibilityTimeoutMs: number;
```

- *Type:* number

The number of milliseconds that a message is exclusively leased.

After the timeout, the message becomes available for another attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/queue_consumer#visibility_timeout_ms QueueConsumer#visibility_timeout_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### QueueConsumerSettingsOutputReference <a name="QueueConsumerSettingsOutputReference" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer"></a>

```typescript
import { queueConsumer } from '@cdktf/provider-cloudflare'

new queueConsumer.QueueConsumerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxWaitTimeMs">resetMaxWaitTimeMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetRetryDelay">resetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetVisibilityTimeoutMs">resetVisibilityTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxConcurrency"></a>

```typescript
public resetMaxConcurrency(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMaxWaitTimeMs` <a name="resetMaxWaitTimeMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxWaitTimeMs"></a>

```typescript
public resetMaxWaitTimeMs(): void
```

##### `resetRetryDelay` <a name="resetRetryDelay" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetRetryDelay"></a>

```typescript
public resetRetryDelay(): void
```

##### `resetVisibilityTimeoutMs` <a name="resetVisibilityTimeoutMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetVisibilityTimeoutMs"></a>

```typescript
public resetVisibilityTimeoutMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMsInput">maxWaitTimeMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelayInput">retryDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMsInput">visibilityTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMs">maxWaitTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelay">retryDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMs">visibilityTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrencyInput"></a>

```typescript
public readonly maxConcurrencyInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `maxWaitTimeMsInput`<sup>Optional</sup> <a name="maxWaitTimeMsInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMsInput"></a>

```typescript
public readonly maxWaitTimeMsInput: number;
```

- *Type:* number

---

##### `retryDelayInput`<sup>Optional</sup> <a name="retryDelayInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelayInput"></a>

```typescript
public readonly retryDelayInput: number;
```

- *Type:* number

---

##### `visibilityTimeoutMsInput`<sup>Optional</sup> <a name="visibilityTimeoutMsInput" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMsInput"></a>

```typescript
public readonly visibilityTimeoutMsInput: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `maxWaitTimeMs`<sup>Required</sup> <a name="maxWaitTimeMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMs"></a>

```typescript
public readonly maxWaitTimeMs: number;
```

- *Type:* number

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelay"></a>

```typescript
public readonly retryDelay: number;
```

- *Type:* number

---

##### `visibilityTimeoutMs`<sup>Required</sup> <a name="visibilityTimeoutMs" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMs"></a>

```typescript
public readonly visibilityTimeoutMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QueueConsumerSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---



