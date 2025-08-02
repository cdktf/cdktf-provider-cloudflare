# `r2BucketSippy` Submodule <a name="`r2BucketSippy` Submodule" id="@cdktf/provider-cloudflare.r2BucketSippy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2BucketSippy <a name="R2BucketSippy" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

new r2BucketSippy.R2BucketSippy(scope: Construct, id: string, config: R2BucketSippyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig">R2BucketSippyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig">R2BucketSippyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.putDestination"></a>

```typescript
public putDestination(value: R2BucketSippyDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.putSource"></a>

```typescript
public putSource(value: R2BucketSippySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetJurisdiction"></a>

```typescript
public resetJurisdiction(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a R2BucketSippy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isConstruct"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

r2BucketSippy.R2BucketSippy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformElement"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

r2BucketSippy.R2BucketSippy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformResource"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

r2BucketSippy.R2BucketSippy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

r2BucketSippy.R2BucketSippy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a R2BucketSippy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the R2BucketSippy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing R2BucketSippy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the R2BucketSippy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference">R2BucketSippyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference">R2BucketSippySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdictionInput">jurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destination"></a>

```typescript
public readonly destination: R2BucketSippyDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference">R2BucketSippyDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.source"></a>

```typescript
public readonly source: R2BucketSippySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference">R2BucketSippySourceOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | R2BucketSippyDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a>

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdictionInput"></a>

```typescript
public readonly jurisdictionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | R2BucketSippySource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### R2BucketSippyConfig <a name="R2BucketSippyConfig" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.Initializer"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

const r2BucketSippyConfig: r2BucketSippy.R2BucketSippyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.accountId">accountId</a></code> | <code>string</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Name of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a></code> | R2 bucket to copy objects to. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a></code> | AWS S3 bucket to copy objects from. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#account_id R2BucketSippy#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#bucket_name R2BucketSippy#bucket_name}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.destination"></a>

```typescript
public readonly destination: R2BucketSippyDestination;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a>

R2 bucket to copy objects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#destination R2BucketSippy#destination}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#jurisdiction R2BucketSippy#jurisdiction}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyConfig.property.source"></a>

```typescript
public readonly source: R2BucketSippySource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a>

AWS S3 bucket to copy objects from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#source R2BucketSippy#source}

---

### R2BucketSippyDestination <a name="R2BucketSippyDestination" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.Initializer"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

const r2BucketSippyDestination: r2BucketSippy.R2BucketSippyDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | ID of a Cloudflare API token. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | Available values: "r2". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Value of a Cloudflare API token. |

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

ID of a Cloudflare API token.

This is the value labelled "Access Key ID" when creating an API.
token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).

Sippy will use this token when writing objects to R2, so it is
best to scope this token to the bucket you're enabling Sippy for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#access_key_id R2BucketSippy#access_key_id}

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

Available values: "r2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#cloud_provider R2BucketSippy#cloud_provider}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Value of a Cloudflare API token.

This is the value labelled "Secret Access Key" when creating an API.
token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).

Sippy will use this token when writing objects to R2, so it is
best to scope this token to the bucket you're enabling Sippy for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#secret_access_key R2BucketSippy#secret_access_key}

---

### R2BucketSippySource <a name="R2BucketSippySource" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.Initializer"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

const r2BucketSippySource: r2BucketSippy.R2BucketSippySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Access Key ID of an IAM credential (ideally scoped to a single S3 bucket). |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.bucket">bucket</a></code> | <code>string</code> | Name of the AWS S3 bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.clientEmail">clientEmail</a></code> | <code>string</code> | Client email of an IAM credential (ideally scoped to a single GCS bucket). |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | Available values: "aws", "gcs". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.privateKey">privateKey</a></code> | <code>string</code> | Private Key of an IAM credential (ideally scoped to a single GCS bucket). |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.region">region</a></code> | <code>string</code> | Name of the AWS availability zone. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket). |

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Access Key ID of an IAM credential (ideally scoped to a single S3 bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#access_key_id R2BucketSippy#access_key_id}

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Name of the AWS S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#bucket R2BucketSippy#bucket}

---

##### `clientEmail`<sup>Optional</sup> <a name="clientEmail" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

Client email of an IAM credential (ideally scoped to a single GCS bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#client_email R2BucketSippy#client_email}

---

##### `cloudProvider`<sup>Optional</sup> <a name="cloudProvider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

Available values: "aws", "gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#cloud_provider R2BucketSippy#cloud_provider}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Private Key of an IAM credential (ideally scoped to a single GCS bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#private_key R2BucketSippy#private_key}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Name of the AWS availability zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#region R2BucketSippy#region}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/r2_bucket_sippy#secret_access_key R2BucketSippy#secret_access_key}

---

## Classes <a name="Classes" id="Classes"></a>

### R2BucketSippyDestinationOutputReference <a name="R2BucketSippyDestinationOutputReference" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

new r2BucketSippy.R2BucketSippyDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetCloudProvider` <a name="resetCloudProvider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetCloudProvider"></a>

```typescript
public resetCloudProvider(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | R2BucketSippyDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippyDestination">R2BucketSippyDestination</a>

---


### R2BucketSippySourceOutputReference <a name="R2BucketSippySourceOutputReference" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer"></a>

```typescript
import { r2BucketSippy } from '@cdktf/provider-cloudflare'

new r2BucketSippy.R2BucketSippySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetClientEmail">resetClientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetCloudProvider">resetCloudProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetClientEmail` <a name="resetClientEmail" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetClientEmail"></a>

```typescript
public resetClientEmail(): void
```

##### `resetCloudProvider` <a name="resetCloudProvider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetCloudProvider"></a>

```typescript
public resetCloudProvider(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmailInput">clientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProviderInput">cloudProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmailInput"></a>

```typescript
public readonly clientEmailInput: string;
```

- *Type:* string

---

##### `cloudProviderInput`<sup>Optional</sup> <a name="cloudProviderInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProviderInput"></a>

```typescript
public readonly cloudProviderInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | R2BucketSippySource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.r2BucketSippy.R2BucketSippySource">R2BucketSippySource</a>

---



