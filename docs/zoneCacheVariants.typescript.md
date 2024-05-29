# `zoneCacheVariants` Submodule <a name="`zoneCacheVariants` Submodule" id="@cdktf/provider-cloudflare.zoneCacheVariants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneCacheVariants <a name="ZoneCacheVariants" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants cloudflare_zone_cache_variants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer"></a>

```typescript
import { zoneCacheVariants } from '@cdktf/provider-cloudflare'

new zoneCacheVariants.ZoneCacheVariants(scope: Construct, id: string, config: ZoneCacheVariantsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig">ZoneCacheVariantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetAvif">resetAvif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetBmp">resetBmp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetGif">resetGif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJp2">resetJp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJpeg">resetJpeg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJpg">resetJpg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJpg2">resetJpg2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetPng">resetPng</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetTif">resetTif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetTiff">resetTiff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetWebp">resetWebp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAvif` <a name="resetAvif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetAvif"></a>

```typescript
public resetAvif(): void
```

##### `resetBmp` <a name="resetBmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetBmp"></a>

```typescript
public resetBmp(): void
```

##### `resetGif` <a name="resetGif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetGif"></a>

```typescript
public resetGif(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJp2` <a name="resetJp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJp2"></a>

```typescript
public resetJp2(): void
```

##### `resetJpeg` <a name="resetJpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJpeg"></a>

```typescript
public resetJpeg(): void
```

##### `resetJpg` <a name="resetJpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJpg"></a>

```typescript
public resetJpg(): void
```

##### `resetJpg2` <a name="resetJpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetJpg2"></a>

```typescript
public resetJpg2(): void
```

##### `resetPng` <a name="resetPng" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetPng"></a>

```typescript
public resetPng(): void
```

##### `resetTif` <a name="resetTif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetTif"></a>

```typescript
public resetTif(): void
```

##### `resetTiff` <a name="resetTiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetTiff"></a>

```typescript
public resetTiff(): void
```

##### `resetWebp` <a name="resetWebp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.resetWebp"></a>

```typescript
public resetWebp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct"></a>

```typescript
import { zoneCacheVariants } from '@cdktf/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement"></a>

```typescript
import { zoneCacheVariants } from '@cdktf/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource"></a>

```typescript
import { zoneCacheVariants } from '@cdktf/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport"></a>

```typescript
import { zoneCacheVariants } from '@cdktf/provider-cloudflare'

zoneCacheVariants.ZoneCacheVariants.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZoneCacheVariants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneCacheVariants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneCacheVariants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneCacheVariants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.avifInput">avifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.bmpInput">bmpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.gifInput">gifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jp2Input">jp2Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpegInput">jpegInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpg2Input">jpg2Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpgInput">jpgInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.pngInput">pngInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tiffInput">tiffInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tifInput">tifInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.webpInput">webpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.avif">avif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.bmp">bmp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.gif">gif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jp2">jp2</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpeg">jpeg</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpg">jpg</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpg2">jpg2</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.png">png</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tif">tif</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tiff">tiff</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.webp">webp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `avifInput`<sup>Optional</sup> <a name="avifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.avifInput"></a>

```typescript
public readonly avifInput: string[];
```

- *Type:* string[]

---

##### `bmpInput`<sup>Optional</sup> <a name="bmpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.bmpInput"></a>

```typescript
public readonly bmpInput: string[];
```

- *Type:* string[]

---

##### `gifInput`<sup>Optional</sup> <a name="gifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.gifInput"></a>

```typescript
public readonly gifInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jp2Input`<sup>Optional</sup> <a name="jp2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jp2Input"></a>

```typescript
public readonly jp2Input: string[];
```

- *Type:* string[]

---

##### `jpegInput`<sup>Optional</sup> <a name="jpegInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpegInput"></a>

```typescript
public readonly jpegInput: string[];
```

- *Type:* string[]

---

##### `jpg2Input`<sup>Optional</sup> <a name="jpg2Input" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpg2Input"></a>

```typescript
public readonly jpg2Input: string[];
```

- *Type:* string[]

---

##### `jpgInput`<sup>Optional</sup> <a name="jpgInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpgInput"></a>

```typescript
public readonly jpgInput: string[];
```

- *Type:* string[]

---

##### `pngInput`<sup>Optional</sup> <a name="pngInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.pngInput"></a>

```typescript
public readonly pngInput: string[];
```

- *Type:* string[]

---

##### `tiffInput`<sup>Optional</sup> <a name="tiffInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tiffInput"></a>

```typescript
public readonly tiffInput: string[];
```

- *Type:* string[]

---

##### `tifInput`<sup>Optional</sup> <a name="tifInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tifInput"></a>

```typescript
public readonly tifInput: string[];
```

- *Type:* string[]

---

##### `webpInput`<sup>Optional</sup> <a name="webpInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.webpInput"></a>

```typescript
public readonly webpInput: string[];
```

- *Type:* string[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `avif`<sup>Required</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.avif"></a>

```typescript
public readonly avif: string[];
```

- *Type:* string[]

---

##### `bmp`<sup>Required</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.bmp"></a>

```typescript
public readonly bmp: string[];
```

- *Type:* string[]

---

##### `gif`<sup>Required</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.gif"></a>

```typescript
public readonly gif: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jp2`<sup>Required</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jp2"></a>

```typescript
public readonly jp2: string[];
```

- *Type:* string[]

---

##### `jpeg`<sup>Required</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpeg"></a>

```typescript
public readonly jpeg: string[];
```

- *Type:* string[]

---

##### `jpg`<sup>Required</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpg"></a>

```typescript
public readonly jpg: string[];
```

- *Type:* string[]

---

##### `jpg2`<sup>Required</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.jpg2"></a>

```typescript
public readonly jpg2: string[];
```

- *Type:* string[]

---

##### `png`<sup>Required</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.png"></a>

```typescript
public readonly png: string[];
```

- *Type:* string[]

---

##### `tif`<sup>Required</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tif"></a>

```typescript
public readonly tif: string[];
```

- *Type:* string[]

---

##### `tiff`<sup>Required</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tiff"></a>

```typescript
public readonly tiff: string[];
```

- *Type:* string[]

---

##### `webp`<sup>Required</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.webp"></a>

```typescript
public readonly webp: string[];
```

- *Type:* string[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariants.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneCacheVariantsConfig <a name="ZoneCacheVariantsConfig" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.Initializer"></a>

```typescript
import { zoneCacheVariants } from '@cdktf/provider-cloudflare'

const zoneCacheVariantsConfig: zoneCacheVariants.ZoneCacheVariantsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.avif">avif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for avif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.bmp">bmp</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for bmp. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.gif">gif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for gif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#id ZoneCacheVariants#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jp2">jp2</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jp2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jpeg">jpeg</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpeg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jpg">jpg</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpg. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jpg2">jpg2</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for jpg2. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.png">png</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for png. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.tif">tif</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for tif. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.tiff">tiff</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for tiff. |
| <code><a href="#@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.webp">webp</a></code> | <code>string[]</code> | List of strings with the MIME types of all the variants that should be served for webp. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#zone_id ZoneCacheVariants#zone_id}

---

##### `avif`<sup>Optional</sup> <a name="avif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.avif"></a>

```typescript
public readonly avif: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for avif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#avif ZoneCacheVariants#avif}

---

##### `bmp`<sup>Optional</sup> <a name="bmp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.bmp"></a>

```typescript
public readonly bmp: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for bmp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#bmp ZoneCacheVariants#bmp}

---

##### `gif`<sup>Optional</sup> <a name="gif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.gif"></a>

```typescript
public readonly gif: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for gif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#gif ZoneCacheVariants#gif}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#id ZoneCacheVariants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jp2`<sup>Optional</sup> <a name="jp2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jp2"></a>

```typescript
public readonly jp2: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jp2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#jp2 ZoneCacheVariants#jp2}

---

##### `jpeg`<sup>Optional</sup> <a name="jpeg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jpeg"></a>

```typescript
public readonly jpeg: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpeg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#jpeg ZoneCacheVariants#jpeg}

---

##### `jpg`<sup>Optional</sup> <a name="jpg" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jpg"></a>

```typescript
public readonly jpg: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpg.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#jpg ZoneCacheVariants#jpg}

---

##### `jpg2`<sup>Optional</sup> <a name="jpg2" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.jpg2"></a>

```typescript
public readonly jpg2: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for jpg2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#jpg2 ZoneCacheVariants#jpg2}

---

##### `png`<sup>Optional</sup> <a name="png" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.png"></a>

```typescript
public readonly png: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#png ZoneCacheVariants#png}

---

##### `tif`<sup>Optional</sup> <a name="tif" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.tif"></a>

```typescript
public readonly tif: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for tif.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#tif ZoneCacheVariants#tif}

---

##### `tiff`<sup>Optional</sup> <a name="tiff" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.tiff"></a>

```typescript
public readonly tiff: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for tiff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#tiff ZoneCacheVariants#tiff}

---

##### `webp`<sup>Optional</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneCacheVariants.ZoneCacheVariantsConfig.property.webp"></a>

```typescript
public readonly webp: string[];
```

- *Type:* string[]

List of strings with the MIME types of all the variants that should be served for webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/zone_cache_variants#webp ZoneCacheVariants#webp}

---



