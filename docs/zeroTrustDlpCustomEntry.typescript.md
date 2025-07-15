# `zeroTrustDlpCustomEntry` Submodule <a name="`zeroTrustDlpCustomEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpCustomEntry <a name="ZeroTrustDlpCustomEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry(scope: Construct, id: string, config: ZeroTrustDlpCustomEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig">ZeroTrustDlpCustomEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig">ZeroTrustDlpCustomEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern">putPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPattern` <a name="putPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern"></a>

```typescript
public putPattern(value: ZeroTrustDlpCustomEntryPattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

---

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpCustomEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpCustomEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpCustomEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.caseSensitive">caseSensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference">ZeroTrustDlpCustomEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference">ZeroTrustDlpCustomEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.wordList">wordList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.patternInput">patternInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.confidence"></a>

```typescript
public readonly confidence: ZeroTrustDlpCustomEntryConfidenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference">ZeroTrustDlpCustomEntryConfidenceOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.pattern"></a>

```typescript
public readonly pattern: ZeroTrustDlpCustomEntryPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference">ZeroTrustDlpCustomEntryPatternOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.secret"></a>

```typescript
public readonly secret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.wordList"></a>

```typescript
public readonly wordList: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.patternInput"></a>

```typescript
public readonly patternInput: IResolvable | ZeroTrustDlpCustomEntryPattern;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpCustomEntryConfidence <a name="ZeroTrustDlpCustomEntryConfidence" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence.Initializer"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomEntryConfidence: zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence = { ... }
```


### ZeroTrustDlpCustomEntryConfig <a name="ZeroTrustDlpCustomEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.Initializer"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomEntryConfig: zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.type">type</a></code> | <code>string</code> | Available values: "custom", "predefined", "integration". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.pattern"></a>

```typescript
public readonly pattern: ZeroTrustDlpCustomEntryPattern;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "custom", "predefined", "integration".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#type ZeroTrustDlpCustomEntry#type}

---

### ZeroTrustDlpCustomEntryPattern <a name="ZeroTrustDlpCustomEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.Initializer"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

const zeroTrustDlpCustomEntryPattern: zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.validation">validation</a></code> | <code>string</code> | Available values: "luhn". |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#validation ZeroTrustDlpCustomEntry#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpCustomEntryConfidenceOutputReference <a name="ZeroTrustDlpCustomEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.aiContextAvailable">aiContextAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence">ZeroTrustDlpCustomEntryConfidence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiContextAvailable`<sup>Required</sup> <a name="aiContextAvailable" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```typescript
public readonly aiContextAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.available"></a>

```typescript
public readonly available: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustDlpCustomEntryConfidence;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence">ZeroTrustDlpCustomEntryConfidence</a>

---


### ZeroTrustDlpCustomEntryPatternOutputReference <a name="ZeroTrustDlpCustomEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpCustomEntry } from '@cdktf/provider-cloudflare'

new zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resetValidation"></a>

```typescript
public resetValidation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validationInput">validationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validation">validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validationInput"></a>

```typescript
public readonly validationInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpCustomEntryPattern;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

---



