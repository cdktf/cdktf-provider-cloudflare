# `workerVersion` Submodule <a name="`workerVersion` Submodule" id="@cdktf/provider-cloudflare.workerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerVersion <a name="WorkerVersion" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersion(scope: Construct, id: string, config: WorkerVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig">WorkerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig">WorkerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations">putAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets">putAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings">putBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations">putMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules">putModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets">resetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings">resetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule">resetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations">resetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules">resetModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnnotations` <a name="putAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations"></a>

```typescript
public putAnnotations(value: WorkerVersionAnnotations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `putAssets` <a name="putAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets"></a>

```typescript
public putAssets(value: WorkerVersionAssets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `putBindings` <a name="putBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings"></a>

```typescript
public putBindings(value: IResolvable | WorkerVersionBindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits"></a>

```typescript
public putLimits(value: WorkerVersionLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `putMigrations` <a name="putMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations"></a>

```typescript
public putMigrations(value: WorkerVersionMigrations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `putModules` <a name="putModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules"></a>

```typescript
public putModules(value: IResolvable | WorkerVersionModules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement"></a>

```typescript
public putPlacement(value: WorkerVersionPlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAssets` <a name="resetAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets"></a>

```typescript
public resetAssets(): void
```

##### `resetBindings` <a name="resetBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings"></a>

```typescript
public resetBindings(): void
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate"></a>

```typescript
public resetCompatibilityDate(): void
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags"></a>

```typescript
public resetCompatibilityFlags(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetMainModule` <a name="resetMainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule"></a>

```typescript
public resetMainModule(): void
```

##### `resetMigrations` <a name="resetMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations"></a>

```typescript
public resetMigrations(): void
```

##### `resetModules` <a name="resetModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules"></a>

```typescript
public resetModules(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel"></a>

```typescript
public resetUsageModel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

workerVersion.WorkerVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

workerVersion.WorkerVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

workerVersion.WorkerVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

workerVersion.WorkerVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules">modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput">annotationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput">assetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput">bindingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput">limitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput">mainModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput">migrationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput">modulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput">placementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput">usageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput">workerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule">mainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel">usageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId">workerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations"></a>

```typescript
public readonly annotations: WorkerVersionAnnotationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets"></a>

```typescript
public readonly assets: WorkerVersionAssetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings"></a>

```typescript
public readonly bindings: WorkerVersionBindingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits"></a>

```typescript
public readonly limits: WorkerVersionLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a>

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations"></a>

```typescript
public readonly migrations: WorkerVersionMigrationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a>

---

##### `modules`<sup>Required</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules"></a>

```typescript
public readonly modules: WorkerVersionModulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement"></a>

```typescript
public readonly placement: WorkerVersionPlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: IResolvable | WorkerVersionAnnotations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `assetsInput`<sup>Optional</sup> <a name="assetsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput"></a>

```typescript
public readonly assetsInput: IResolvable | WorkerVersionAssets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `bindingsInput`<sup>Optional</sup> <a name="bindingsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput"></a>

```typescript
public readonly bindingsInput: IResolvable | WorkerVersionBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput"></a>

```typescript
public readonly compatibilityDateInput: string;
```

- *Type:* string

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput"></a>

```typescript
public readonly compatibilityFlagsInput: string[];
```

- *Type:* string[]

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput"></a>

```typescript
public readonly limitsInput: IResolvable | WorkerVersionLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `mainModuleInput`<sup>Optional</sup> <a name="mainModuleInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput"></a>

```typescript
public readonly mainModuleInput: string;
```

- *Type:* string

---

##### `migrationsInput`<sup>Optional</sup> <a name="migrationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput"></a>

```typescript
public readonly migrationsInput: IResolvable | WorkerVersionMigrations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `modulesInput`<sup>Optional</sup> <a name="modulesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput"></a>

```typescript
public readonly modulesInput: IResolvable | WorkerVersionModules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput"></a>

```typescript
public readonly placementInput: IResolvable | WorkerVersionPlacement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput"></a>

```typescript
public readonly usageModelInput: string;
```

- *Type:* string

---

##### `workerIdInput`<sup>Optional</sup> <a name="workerIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput"></a>

```typescript
public readonly workerIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

---

##### `mainModule`<sup>Required</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule"></a>

```typescript
public readonly mainModule: string;
```

- *Type:* string

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerVersionAnnotations <a name="WorkerVersionAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionAnnotations: workerVersion.WorkerVersionAnnotations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage">workersMessage</a></code> | <code>string</code> | Human-readable message about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag">workersTag</a></code> | <code>string</code> | User-provided identifier for the version. |

---

##### `workersMessage`<sup>Optional</sup> <a name="workersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage"></a>

```typescript
public readonly workersMessage: string;
```

- *Type:* string

Human-readable message about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}

---

##### `workersTag`<sup>Optional</sup> <a name="workersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag"></a>

```typescript
public readonly workersTag: string;
```

- *Type:* string

User-provided identifier for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}

---

### WorkerVersionAssets <a name="WorkerVersionAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionAssets: workerVersion.WorkerVersionAssets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.directory">directory</a></code> | <code>string</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt">jwt</a></code> | <code>string</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config"></a>

```typescript
public readonly config: WorkerVersionAssetsConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#config WorkerVersion#config}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#directory WorkerVersion#directory}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#jwt WorkerVersion#jwt}

---

### WorkerVersionAssetsConfig <a name="WorkerVersionAssetsConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionAssetsConfig: workerVersion.WorkerVersionAssetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling">htmlHandling</a></code> | <code>string</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling">notFoundHandling</a></code> | <code>string</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst">runWorkerFirst</a></code> | <code>string[]</code> | Contains a list path rules to control routing to either the Worker or assets. |

---

##### `htmlHandling`<sup>Optional</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling"></a>

```typescript
public readonly htmlHandling: string;
```

- *Type:* string

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}

---

##### `notFoundHandling`<sup>Optional</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling"></a>

```typescript
public readonly notFoundHandling: string;
```

- *Type:* string

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}

---

##### `runWorkerFirst`<sup>Optional</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst"></a>

```typescript
public readonly runWorkerFirst: string[];
```

- *Type:* string[]

Contains a list path rules to control routing to either the Worker or assets.

Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}

---

### WorkerVersionBindings <a name="WorkerVersionBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionBindings: workerVersion.WorkerVersionBindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name">name</a></code> | <code>string</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type">type</a></code> | <code>string</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm">algorithm</a></code> | <code>string</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>string[]</code> | List of allowed destination addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>string[]</code> | List of allowed sender addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName">bucketName</a></code> | <code>string</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId">certificateId</a></code> | <code>string</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className">className</a></code> | <code>string</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset">dataset</a></code> | <code>string</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | Destination address for the email. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment">environment</a></code> | <code>string</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format">format</a></code> | <code>string</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id">id</a></code> | <code>string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName">indexName</a></code> | <code>string</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json">json</a></code> | <code>string</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64">keyBase64</a></code> | <code>string</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk">keyJwk</a></code> | <code>string</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace">namespace</a></code> | <code>string</code> | Namespace to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId">namespaceId</a></code> | <code>string</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.oldName">oldName</a></code> | <code>string</code> | The old name of the inherited binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.part">part</a></code> | <code>string</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline">pipeline</a></code> | <code>string</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName">queueName</a></code> | <code>string</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName">scriptName</a></code> | <code>string</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName">secretName</a></code> | <code>string</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service">service</a></code> | <code>string</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId">storeId</a></code> | <code>string</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text">text</a></code> | <code>string</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages">usages</a></code> | <code>string[]</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.versionId">versionId</a></code> | <code>string</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName">workflowName</a></code> | <code>string</code> | Name of the Workflow to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#name WorkerVersion#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "tail_consumer", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#type WorkerVersion#type}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#algorithm WorkerVersion#algorithm}

---

##### `allowedDestinationAddresses`<sup>Optional</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedDestinationAddresses"></a>

```typescript
public readonly allowedDestinationAddresses: string[];
```

- *Type:* string[]

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#allowed_destination_addresses WorkerVersion#allowed_destination_addresses}

---

##### `allowedSenderAddresses`<sup>Optional</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedSenderAddresses"></a>

```typescript
public readonly allowedSenderAddresses: string[];
```

- *Type:* string[]

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#allowed_sender_addresses WorkerVersion#allowed_sender_addresses}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}

---

##### `className`<sup>Optional</sup> <a name="className" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#class_name WorkerVersion#class_name}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#dataset WorkerVersion#dataset}

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#destination_address WorkerVersion#destination_address}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#format WorkerVersion#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#id WorkerVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#index_name WorkerVersion#index_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#json WorkerVersion#json}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#jurisdiction WorkerVersion#jurisdiction}

---

##### `keyBase64`<sup>Optional</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64"></a>

```typescript
public readonly keyBase64: string;
```

- *Type:* string

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}

---

##### `keyJwk`<sup>Optional</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk"></a>

```typescript
public readonly keyJwk: string;
```

- *Type:* string

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#namespace WorkerVersion#namespace}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}

---

##### `oldName`<sup>Optional</sup> <a name="oldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.oldName"></a>

```typescript
public readonly oldName: string;
```

- *Type:* string

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#old_name WorkerVersion#old_name}

---

##### `outbound`<sup>Optional</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound"></a>

```typescript
public readonly outbound: WorkerVersionBindingsOutbound;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#outbound WorkerVersion#outbound}

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#part WorkerVersion#part}

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#pipeline WorkerVersion#pipeline}

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#queue_name WorkerVersion#queue_name}

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#script_name WorkerVersion#script_name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#secret_name WorkerVersion#secret_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#service WorkerVersion#service}

---

##### `storeId`<sup>Optional</sup> <a name="storeId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#store_id WorkerVersion#store_id}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#text WorkerVersion#text}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#usages WorkerVersion#usages}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#version_id WorkerVersion#version_id}

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}

---

### WorkerVersionBindingsOutbound <a name="WorkerVersionBindingsOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionBindingsOutbound: workerVersion.WorkerVersionBindingsOutbound = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params">params</a></code> | <code>string[]</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params"></a>

```typescript
public readonly params: string[];
```

- *Type:* string[]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#params WorkerVersion#params}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker"></a>

```typescript
public readonly worker: WorkerVersionBindingsOutboundWorker;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#worker WorkerVersion#worker}

---

### WorkerVersionBindingsOutboundWorker <a name="WorkerVersionBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionBindingsOutboundWorker: workerVersion.WorkerVersionBindingsOutboundWorker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment">environment</a></code> | <code>string</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service">service</a></code> | <code>string</code> | Name of the outbound worker. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#service WorkerVersion#service}

---

### WorkerVersionConfig <a name="WorkerVersionConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionConfig: workerVersion.WorkerVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId">workerId</a></code> | <code>string</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings">bindings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule">mainModule</a></code> | <code>string</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules">modules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]</code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel">usageModel</a></code> | <code>string</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations"></a>

```typescript
public readonly annotations: WorkerVersionAnnotations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets"></a>

```typescript
public readonly assets: WorkerVersionAssets;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

[`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings"></a>

```typescript
public readonly bindings: IResolvable | WorkerVersionBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits"></a>

```typescript
public readonly limits: WorkerVersionLimits;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `mainModule`<sup>Optional</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule"></a>

```typescript
public readonly mainModule: string;
```

- *Type:* string

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations"></a>

```typescript
public readonly migrations: WorkerVersionMigrations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `modules`<sup>Optional</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules"></a>

```typescript
public readonly modules: IResolvable | WorkerVersionModules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

Code, sourcemaps, and other content used at runtime.

This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files used to configure 
[Static Assets](https://developers.cloudflare.com/workers/static-assets/). `_headers` and `_redirects` files should be 
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement"></a>

```typescript
public readonly placement: WorkerVersionPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

### WorkerVersionLimits <a name="WorkerVersionLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionLimits: workerVersion.WorkerVersionLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs">cpuMs</a></code> | <code>number</code> | CPU time limit in milliseconds. |

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs"></a>

```typescript
public readonly cpuMs: number;
```

- *Type:* number

CPU time limit in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}

---

### WorkerVersionMigrations <a name="WorkerVersionMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionMigrations: workerVersion.WorkerVersionMigrations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses">newClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag">newTag</a></code> | <code>string</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag">oldTag</a></code> | <code>string</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses">renamedClasses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses">transferredClasses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deletedClasses`<sup>Optional</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `newClasses`<sup>Optional</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `newSqliteClasses`<sup>Optional</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `newTag`<sup>Optional</sup> <a name="newTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag"></a>

```typescript
public readonly newTag: string;
```

- *Type:* string

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}

---

##### `oldTag`<sup>Optional</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag"></a>

```typescript
public readonly oldTag: string;
```

- *Type:* string

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}

---

##### `renamedClasses`<sup>Optional</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: IResolvable | WorkerVersionMigrationsRenamedClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps"></a>

```typescript
public readonly steps: IResolvable | WorkerVersionMigrationsSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#steps WorkerVersion#steps}

---

##### `transferredClasses`<sup>Optional</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: IResolvable | WorkerVersionMigrationsTransferredClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsRenamedClasses <a name="WorkerVersionMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionMigrationsRenamedClasses: workerVersion.WorkerVersionMigrationsRenamedClasses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to">to</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsSteps <a name="WorkerVersionMigrationsSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionMigrationsSteps: workerVersion.WorkerVersionMigrationsSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses">newClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses">renamedClasses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses">transferredClasses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deletedClasses`<sup>Optional</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `newClasses`<sup>Optional</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `newSqliteClasses`<sup>Optional</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `renamedClasses`<sup>Optional</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: IResolvable | WorkerVersionMigrationsStepsRenamedClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `transferredClasses`<sup>Optional</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: IResolvable | WorkerVersionMigrationsStepsTransferredClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsStepsRenamedClasses <a name="WorkerVersionMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionMigrationsStepsRenamedClasses: workerVersion.WorkerVersionMigrationsStepsRenamedClasses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to">to</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsStepsTransferredClasses <a name="WorkerVersionMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionMigrationsStepsTransferredClasses: workerVersion.WorkerVersionMigrationsStepsTransferredClasses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript">fromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to">to</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `fromScript`<sup>Optional</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsTransferredClasses <a name="WorkerVersionMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionMigrationsTransferredClasses: workerVersion.WorkerVersionMigrationsTransferredClasses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript">fromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to">to</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `fromScript`<sup>Optional</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionModules <a name="WorkerVersionModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionModules: workerVersion.WorkerVersionModules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile">contentFile</a></code> | <code>string</code> | The file path of the module content. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType">contentType</a></code> | <code>string</code> | The content type of the module. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name">name</a></code> | <code>string</code> | The name of the module. |

---

##### `contentFile`<sup>Required</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile"></a>

```typescript
public readonly contentFile: string;
```

- *Type:* string

The file path of the module content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#content_file WorkerVersion#content_file}

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#content_type WorkerVersion#content_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#name WorkerVersion#name}

---

### WorkerVersionPlacement <a name="WorkerVersionPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

const workerVersionPlacement: workerVersion.WorkerVersionPlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode">mode</a></code> | <code>string</code> | Placement mode for the version. Available values: "smart". |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Placement mode for the version. Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/worker_version#mode WorkerVersion#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerVersionAnnotationsOutputReference <a name="WorkerVersionAnnotationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionAnnotationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage">resetWorkersMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag">resetWorkersTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkersMessage` <a name="resetWorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage"></a>

```typescript
public resetWorkersMessage(): void
```

##### `resetWorkersTag` <a name="resetWorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag"></a>

```typescript
public resetWorkersTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">workersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput">workersMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput">workersTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage">workersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag">workersTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workersTriggeredBy`<sup>Required</sup> <a name="workersTriggeredBy" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```typescript
public readonly workersTriggeredBy: string;
```

- *Type:* string

---

##### `workersMessageInput`<sup>Optional</sup> <a name="workersMessageInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput"></a>

```typescript
public readonly workersMessageInput: string;
```

- *Type:* string

---

##### `workersTagInput`<sup>Optional</sup> <a name="workersTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput"></a>

```typescript
public readonly workersTagInput: string;
```

- *Type:* string

---

##### `workersMessage`<sup>Required</sup> <a name="workersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```typescript
public readonly workersMessage: string;
```

- *Type:* string

---

##### `workersTag`<sup>Required</sup> <a name="workersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```typescript
public readonly workersTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionAnnotations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---


### WorkerVersionAssetsConfigOutputReference <a name="WorkerVersionAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionAssetsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling">resetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling">resetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst">resetRunWorkerFirst</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHtmlHandling` <a name="resetHtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling"></a>

```typescript
public resetHtmlHandling(): void
```

##### `resetNotFoundHandling` <a name="resetNotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling"></a>

```typescript
public resetNotFoundHandling(): void
```

##### `resetRunWorkerFirst` <a name="resetRunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```typescript
public resetRunWorkerFirst(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput">htmlHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput">notFoundHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput">runWorkerFirstInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling">htmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling">notFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">runWorkerFirst</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlHandlingInput`<sup>Optional</sup> <a name="htmlHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```typescript
public readonly htmlHandlingInput: string;
```

- *Type:* string

---

##### `notFoundHandlingInput`<sup>Optional</sup> <a name="notFoundHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```typescript
public readonly notFoundHandlingInput: string;
```

- *Type:* string

---

##### `runWorkerFirstInput`<sup>Optional</sup> <a name="runWorkerFirstInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```typescript
public readonly runWorkerFirstInput: string[];
```

- *Type:* string[]

---

##### `htmlHandling`<sup>Required</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```typescript
public readonly htmlHandling: string;
```

- *Type:* string

---

##### `notFoundHandling`<sup>Required</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```typescript
public readonly notFoundHandling: string;
```

- *Type:* string

---

##### `runWorkerFirst`<sup>Required</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```typescript
public readonly runWorkerFirst: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionAssetsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---


### WorkerVersionAssetsOutputReference <a name="WorkerVersionAssetsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt">resetJwt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig"></a>

```typescript
public putConfig(value: WorkerVersionAssetsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt"></a>

```typescript
public resetJwt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.assetManifestSha256">assetManifestSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput">jwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt">jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assetManifestSha256`<sup>Required</sup> <a name="assetManifestSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.assetManifestSha256"></a>

```typescript
public readonly assetManifestSha256: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config"></a>

```typescript
public readonly config: WorkerVersionAssetsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | WorkerVersionAssetsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput"></a>

```typescript
public readonly jwtInput: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionAssets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---


### WorkerVersionBindingsList <a name="WorkerVersionBindingsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get"></a>

```typescript
public get(index: number): WorkerVersionBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionBindings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

---


### WorkerVersionBindingsOutboundOutputReference <a name="WorkerVersionBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionBindingsOutboundOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker">putWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker">resetWorker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorker` <a name="putWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker"></a>

```typescript
public putWorker(value: WorkerVersionBindingsOutboundWorker): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `resetParams` <a name="resetParams" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetWorker` <a name="resetWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker"></a>

```typescript
public resetWorker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput">paramsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput">workerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params">params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```typescript
public readonly worker: WorkerVersionBindingsOutboundWorkerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: string[];
```

- *Type:* string[]

---

##### `workerInput`<sup>Optional</sup> <a name="workerInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput"></a>

```typescript
public readonly workerInput: IResolvable | WorkerVersionBindingsOutboundWorker;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params"></a>

```typescript
public readonly params: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionBindingsOutbound;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---


### WorkerVersionBindingsOutboundWorkerOutputReference <a name="WorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionBindingsOutboundWorker;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---


### WorkerVersionBindingsOutputReference <a name="WorkerVersionBindingsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound">putOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedDestinationAddresses">resetAllowedDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedSenderAddresses">resetAllowedSenderAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName">resetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName">resetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64">resetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk">resetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOldName">resetOldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound">resetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPart">resetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName">resetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId">resetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages">resetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutbound` <a name="putOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound"></a>

```typescript
public putOutbound(value: WorkerVersionBindingsOutbound): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetAllowedDestinationAddresses` <a name="resetAllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```typescript
public resetAllowedDestinationAddresses(): void
```

##### `resetAllowedSenderAddresses` <a name="resetAllowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedSenderAddresses"></a>

```typescript
public resetAllowedSenderAddresses(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetClassName` <a name="resetClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName"></a>

```typescript
public resetClassName(): void
```

##### `resetDataset` <a name="resetDataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset"></a>

```typescript
public resetDataset(): void
```

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDestinationAddress"></a>

```typescript
public resetDestinationAddress(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexName` <a name="resetIndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName"></a>

```typescript
public resetIndexName(): void
```

##### `resetJson` <a name="resetJson" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJurisdiction"></a>

```typescript
public resetJurisdiction(): void
```

##### `resetKeyBase64` <a name="resetKeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64"></a>

```typescript
public resetKeyBase64(): void
```

##### `resetKeyJwk` <a name="resetKeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk"></a>

```typescript
public resetKeyJwk(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetOldName` <a name="resetOldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOldName"></a>

```typescript
public resetOldName(): void
```

##### `resetOutbound` <a name="resetOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound"></a>

```typescript
public resetOutbound(): void
```

##### `resetPart` <a name="resetPart" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPart"></a>

```typescript
public resetPart(): void
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline"></a>

```typescript
public resetPipeline(): void
```

##### `resetQueueName` <a name="resetQueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName"></a>

```typescript
public resetQueueName(): void
```

##### `resetScriptName` <a name="resetScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName"></a>

```typescript
public resetScriptName(): void
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName"></a>

```typescript
public resetSecretName(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetStoreId` <a name="resetStoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId"></a>

```typescript
public resetStoreId(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetUsages` <a name="resetUsages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages"></a>

```typescript
public resetUsages(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName"></a>

```typescript
public resetWorkflowName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddressesInput">allowedDestinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddressesInput">allowedSenderAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput">classNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput">jsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdictionInput">jurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input">keyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput">keyJwkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldNameInput">oldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput">outboundInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.partInput">partInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput">pipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput">scriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput">storeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput">workflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className">className</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64">keyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk">keyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldName">oldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.part">part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId">storeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound"></a>

```typescript
public readonly outbound: WorkerVersionBindingsOutboundOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a>

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `allowedDestinationAddressesInput`<sup>Optional</sup> <a name="allowedDestinationAddressesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```typescript
public readonly allowedDestinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `allowedSenderAddressesInput`<sup>Optional</sup> <a name="allowedSenderAddressesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```typescript
public readonly allowedSenderAddressesInput: string[];
```

- *Type:* string[]

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `classNameInput`<sup>Optional</sup> <a name="classNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput"></a>

```typescript
public readonly classNameInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddressInput"></a>

```typescript
public readonly destinationAddressInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: string;
```

- *Type:* string

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdictionInput"></a>

```typescript
public readonly jurisdictionInput: string;
```

- *Type:* string

---

##### `keyBase64Input`<sup>Optional</sup> <a name="keyBase64Input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input"></a>

```typescript
public readonly keyBase64Input: string;
```

- *Type:* string

---

##### `keyJwkInput`<sup>Optional</sup> <a name="keyJwkInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput"></a>

```typescript
public readonly keyJwkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `oldNameInput`<sup>Optional</sup> <a name="oldNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldNameInput"></a>

```typescript
public readonly oldNameInput: string;
```

- *Type:* string

---

##### `outboundInput`<sup>Optional</sup> <a name="outboundInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput"></a>

```typescript
public readonly outboundInput: IResolvable | WorkerVersionBindingsOutbound;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `partInput`<sup>Optional</sup> <a name="partInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.partInput"></a>

```typescript
public readonly partInput: string;
```

- *Type:* string

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput"></a>

```typescript
public readonly pipelineInput: string;
```

- *Type:* string

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput"></a>

```typescript
public readonly scriptNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput"></a>

```typescript
public readonly storeIdInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput"></a>

```typescript
public readonly workflowNameInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `allowedDestinationAddresses`<sup>Required</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddresses"></a>

```typescript
public readonly allowedDestinationAddresses: string[];
```

- *Type:* string[]

---

##### `allowedSenderAddresses`<sup>Required</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddresses"></a>

```typescript
public readonly allowedSenderAddresses: string[];
```

- *Type:* string[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

##### `keyBase64`<sup>Required</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64"></a>

```typescript
public readonly keyBase64: string;
```

- *Type:* string

---

##### `keyJwk`<sup>Required</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk"></a>

```typescript
public readonly keyJwk: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `oldName`<sup>Required</sup> <a name="oldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldName"></a>

```typescript
public readonly oldName: string;
```

- *Type:* string

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionBindings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>

---


### WorkerVersionLimitsOutputReference <a name="WorkerVersionLimitsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput">cpuMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs">cpuMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuMsInput`<sup>Optional</sup> <a name="cpuMsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput"></a>

```typescript
public readonly cpuMsInput: number;
```

- *Type:* number

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs"></a>

```typescript
public readonly cpuMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---


### WorkerVersionMigrationsOutputReference <a name="WorkerVersionMigrationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses">putRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses">putTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses">resetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses">resetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses">resetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag">resetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag">resetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses">resetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses">resetTransferredClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRenamedClasses` <a name="putRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses"></a>

```typescript
public putRenamedClasses(value: IResolvable | WorkerVersionMigrationsRenamedClasses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | WorkerVersionMigrationsSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

---

##### `putTransferredClasses` <a name="putTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses"></a>

```typescript
public putTransferredClasses(value: IResolvable | WorkerVersionMigrationsTransferredClasses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

---

##### `resetDeletedClasses` <a name="resetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses"></a>

```typescript
public resetDeletedClasses(): void
```

##### `resetNewClasses` <a name="resetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses"></a>

```typescript
public resetNewClasses(): void
```

##### `resetNewSqliteClasses` <a name="resetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses"></a>

```typescript
public resetNewSqliteClasses(): void
```

##### `resetNewTag` <a name="resetNewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag"></a>

```typescript
public resetNewTag(): void
```

##### `resetOldTag` <a name="resetOldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag"></a>

```typescript
public resetOldTag(): void
```

##### `resetRenamedClasses` <a name="resetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses"></a>

```typescript
public resetRenamedClasses(): void
```

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps"></a>

```typescript
public resetSteps(): void
```

##### `resetTransferredClasses` <a name="resetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses"></a>

```typescript
public resetTransferredClasses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput">deletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput">newClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput">newSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput">newTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput">oldTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput">renamedClassesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput">transferredClassesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses">newClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag">newTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag">oldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: WorkerVersionMigrationsRenamedClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps"></a>

```typescript
public readonly steps: WorkerVersionMigrationsStepsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: WorkerVersionMigrationsTransferredClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a>

---

##### `deletedClassesInput`<sup>Optional</sup> <a name="deletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput"></a>

```typescript
public readonly deletedClassesInput: string[];
```

- *Type:* string[]

---

##### `newClassesInput`<sup>Optional</sup> <a name="newClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput"></a>

```typescript
public readonly newClassesInput: string[];
```

- *Type:* string[]

---

##### `newSqliteClassesInput`<sup>Optional</sup> <a name="newSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput"></a>

```typescript
public readonly newSqliteClassesInput: string[];
```

- *Type:* string[]

---

##### `newTagInput`<sup>Optional</sup> <a name="newTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput"></a>

```typescript
public readonly newTagInput: string;
```

- *Type:* string

---

##### `oldTagInput`<sup>Optional</sup> <a name="oldTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput"></a>

```typescript
public readonly oldTagInput: string;
```

- *Type:* string

---

##### `renamedClassesInput`<sup>Optional</sup> <a name="renamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput"></a>

```typescript
public readonly renamedClassesInput: IResolvable | WorkerVersionMigrationsRenamedClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | WorkerVersionMigrationsSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

---

##### `transferredClassesInput`<sup>Optional</sup> <a name="transferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput"></a>

```typescript
public readonly transferredClassesInput: IResolvable | WorkerVersionMigrationsTransferredClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

---

##### `newTag`<sup>Required</sup> <a name="newTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag"></a>

```typescript
public readonly newTag: string;
```

- *Type:* string

---

##### `oldTag`<sup>Required</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag"></a>

```typescript
public readonly oldTag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---


### WorkerVersionMigrationsRenamedClassesList <a name="WorkerVersionMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsRenamedClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get"></a>

```typescript
public get(index: number): WorkerVersionMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsRenamedClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

---


### WorkerVersionMigrationsRenamedClassesOutputReference <a name="WorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsRenamedClasses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>

---


### WorkerVersionMigrationsStepsList <a name="WorkerVersionMigrationsStepsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get"></a>

```typescript
public get(index: number): WorkerVersionMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

---


### WorkerVersionMigrationsStepsOutputReference <a name="WorkerVersionMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses">putRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses">putTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses">resetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses">resetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses">resetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses">resetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses">resetTransferredClasses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRenamedClasses` <a name="putRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses"></a>

```typescript
public putRenamedClasses(value: IResolvable | WorkerVersionMigrationsStepsRenamedClasses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

---

##### `putTransferredClasses` <a name="putTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses"></a>

```typescript
public putTransferredClasses(value: IResolvable | WorkerVersionMigrationsStepsTransferredClasses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

---

##### `resetDeletedClasses` <a name="resetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses"></a>

```typescript
public resetDeletedClasses(): void
```

##### `resetNewClasses` <a name="resetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses"></a>

```typescript
public resetNewClasses(): void
```

##### `resetNewSqliteClasses` <a name="resetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```typescript
public resetNewSqliteClasses(): void
```

##### `resetRenamedClasses` <a name="resetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses"></a>

```typescript
public resetRenamedClasses(): void
```

##### `resetTransferredClasses` <a name="resetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses"></a>

```typescript
public resetTransferredClasses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput">deletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput">newClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput">newSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput">renamedClassesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput">transferredClassesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses">newClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: WorkerVersionMigrationsStepsRenamedClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: WorkerVersionMigrationsStepsTransferredClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `deletedClassesInput`<sup>Optional</sup> <a name="deletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```typescript
public readonly deletedClassesInput: string[];
```

- *Type:* string[]

---

##### `newClassesInput`<sup>Optional</sup> <a name="newClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput"></a>

```typescript
public readonly newClassesInput: string[];
```

- *Type:* string[]

---

##### `newSqliteClassesInput`<sup>Optional</sup> <a name="newSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```typescript
public readonly newSqliteClassesInput: string[];
```

- *Type:* string[]

---

##### `renamedClassesInput`<sup>Optional</sup> <a name="renamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```typescript
public readonly renamedClassesInput: IResolvable | WorkerVersionMigrationsStepsRenamedClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

---

##### `transferredClassesInput`<sup>Optional</sup> <a name="transferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```typescript
public readonly transferredClassesInput: IResolvable | WorkerVersionMigrationsStepsTransferredClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>

---


### WorkerVersionMigrationsStepsRenamedClassesList <a name="WorkerVersionMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsStepsRenamedClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```typescript
public get(index: number): WorkerVersionMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsStepsRenamedClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

---


### WorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="WorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsStepsRenamedClasses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>

---


### WorkerVersionMigrationsStepsTransferredClassesList <a name="WorkerVersionMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsStepsTransferredClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```typescript
public get(index: number): WorkerVersionMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsStepsTransferredClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

---


### WorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="WorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript">resetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetFromScript` <a name="resetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```typescript
public resetFromScript(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">fromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `fromScriptInput`<sup>Optional</sup> <a name="fromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```typescript
public readonly fromScriptInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsStepsTransferredClasses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>

---


### WorkerVersionMigrationsTransferredClassesList <a name="WorkerVersionMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsTransferredClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get"></a>

```typescript
public get(index: number): WorkerVersionMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsTransferredClasses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

---


### WorkerVersionMigrationsTransferredClassesOutputReference <a name="WorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript">resetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetFromScript` <a name="resetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```typescript
public resetFromScript(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput">fromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput">toInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `fromScriptInput`<sup>Optional</sup> <a name="fromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```typescript
public readonly fromScriptInput: string;
```

- *Type:* string

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput"></a>

```typescript
public readonly toInput: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionMigrationsTransferredClasses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>

---


### WorkerVersionModulesList <a name="WorkerVersionModulesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionModulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get"></a>

```typescript
public get(index: number): WorkerVersionModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionModules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

---


### WorkerVersionModulesOutputReference <a name="WorkerVersionModulesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionModulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256">contentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput">contentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile">contentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentSha256`<sup>Required</sup> <a name="contentSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256"></a>

```typescript
public readonly contentSha256: string;
```

- *Type:* string

---

##### `contentFileInput`<sup>Optional</sup> <a name="contentFileInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput"></a>

```typescript
public readonly contentFileInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `contentFile`<sup>Required</sup> <a name="contentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile"></a>

```typescript
public readonly contentFile: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionModules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>

---


### WorkerVersionPlacementOutputReference <a name="WorkerVersionPlacementOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer"></a>

```typescript
import { workerVersion } from '@cdktf/provider-cloudflare'

new workerVersion.WorkerVersionPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkerVersionPlacement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---



