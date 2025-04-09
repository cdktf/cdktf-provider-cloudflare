# `workersForPlatformsScriptSecret` Submodule <a name="`workersForPlatformsScriptSecret` Submodule" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersForPlatformsScriptSecret <a name="WorkersForPlatformsScriptSecret" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret cloudflare_workers_for_platforms_script_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer"></a>

```typescript
import { workersForPlatformsScriptSecret } from '@cdktf/provider-cloudflare'

new workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret(scope: Construct, id: string, config: WorkersForPlatformsScriptSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig">WorkersForPlatformsScriptSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig">WorkersForPlatformsScriptSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetText` <a name="resetText" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetText"></a>

```typescript
public resetText(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct"></a>

```typescript
import { workersForPlatformsScriptSecret } from '@cdktf/provider-cloudflare'

workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement"></a>

```typescript
import { workersForPlatformsScriptSecret } from '@cdktf/provider-cloudflare'

workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource"></a>

```typescript
import { workersForPlatformsScriptSecret } from '@cdktf/provider-cloudflare'

workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport"></a>

```typescript
import { workersForPlatformsScriptSecret } from '@cdktf/provider-cloudflare'

workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkersForPlatformsScriptSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkersForPlatformsScriptSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkersForPlatformsScriptSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespaceInput">dispatchNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptNameInput">scriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespace">dispatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `dispatchNamespaceInput`<sup>Optional</sup> <a name="dispatchNamespaceInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespaceInput"></a>

```typescript
public readonly dispatchNamespaceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptNameInput"></a>

```typescript
public readonly scriptNameInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `dispatchNamespace`<sup>Required</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespace"></a>

```typescript
public readonly dispatchNamespace: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersForPlatformsScriptSecretConfig <a name="WorkersForPlatformsScriptSecretConfig" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.Initializer"></a>

```typescript
import { workersForPlatformsScriptSecret } from '@cdktf/provider-cloudflare'

const workersForPlatformsScriptSecretConfig: workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dispatchNamespace">dispatchNamespace</a></code> | <code>string</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.name">name</a></code> | <code>string</code> | The name of this secret, this is what will be used to access it inside the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.scriptName">scriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.text">text</a></code> | <code>string</code> | The value of the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.type">type</a></code> | <code>string</code> | The type of secret to put. Available values: "secret_text". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#account_id WorkersForPlatformsScriptSecret#account_id}

---

##### `dispatchNamespace`<sup>Required</sup> <a name="dispatchNamespace" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dispatchNamespace"></a>

```typescript
public readonly dispatchNamespace: string;
```

- *Type:* string

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#dispatch_namespace WorkersForPlatformsScriptSecret#dispatch_namespace}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this secret, this is what will be used to access it inside the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#name WorkersForPlatformsScriptSecret#name}

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#script_name WorkersForPlatformsScriptSecret#script_name}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The value of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#text WorkersForPlatformsScriptSecret#text}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of secret to put. Available values: "secret_text".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#type WorkersForPlatformsScriptSecret#type}

---



