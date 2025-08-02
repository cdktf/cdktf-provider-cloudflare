# `workersCronTrigger` Submodule <a name="`workersCronTrigger` Submodule" id="@cdktf/provider-cloudflare.workersCronTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersCronTrigger <a name="WorkersCronTrigger" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger cloudflare_workers_cron_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

new workersCronTrigger.WorkersCronTrigger(scope: Construct, id: string, config: WorkersCronTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig">WorkersCronTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig">WorkersCronTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.putSchedules">putSchedules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedules` <a name="putSchedules" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.putSchedules"></a>

```typescript
public putSchedules(value: IResolvable | WorkersCronTriggerSchedules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.putSchedules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersCronTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isConstruct"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

workersCronTrigger.WorkersCronTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isTerraformElement"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

workersCronTrigger.WorkersCronTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isTerraformResource"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

workersCronTrigger.WorkersCronTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.generateConfigForImport"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

workersCronTrigger.WorkersCronTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkersCronTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkersCronTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkersCronTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkersCronTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.schedules">schedules</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList">WorkersCronTriggerSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.schedulesInput">schedulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.scriptNameInput">scriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.schedules"></a>

```typescript
public readonly schedules: WorkersCronTriggerSchedulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList">WorkersCronTriggerSchedulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.schedulesInput"></a>

```typescript
public readonly schedulesInput: IResolvable | WorkersCronTriggerSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.scriptNameInput"></a>

```typescript
public readonly scriptNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersCronTriggerConfig <a name="WorkersCronTriggerConfig" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.Initializer"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

const workersCronTriggerConfig: workersCronTrigger.WorkersCronTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.schedules">schedules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#schedules WorkersCronTrigger#schedules}. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.scriptName">scriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#account_id WorkersCronTrigger#account_id}

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.schedules"></a>

```typescript
public readonly schedules: IResolvable | WorkersCronTriggerSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#schedules WorkersCronTrigger#schedules}.

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerConfig.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#script_name WorkersCronTrigger#script_name}

---

### WorkersCronTriggerSchedules <a name="WorkersCronTriggerSchedules" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules.Initializer"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

const workersCronTriggerSchedules: workersCronTrigger.WorkersCronTriggerSchedules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules.property.cron">cron</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#cron WorkersCronTrigger#cron}. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_cron_trigger#cron WorkersCronTrigger#cron}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersCronTriggerSchedulesList <a name="WorkersCronTriggerSchedulesList" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

new workersCronTrigger.WorkersCronTriggerSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.get"></a>

```typescript
public get(index: number): WorkersCronTriggerSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkersCronTriggerSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>[]

---


### WorkersCronTriggerSchedulesOutputReference <a name="WorkersCronTriggerSchedulesOutputReference" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer"></a>

```typescript
import { workersCronTrigger } from '@cdktf/provider-cloudflare'

new workersCronTrigger.WorkersCronTriggerSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkersCronTriggerSchedules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersCronTrigger.WorkersCronTriggerSchedules">WorkersCronTriggerSchedules</a>

---



