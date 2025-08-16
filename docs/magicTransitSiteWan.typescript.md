# `magicTransitSiteWan` Submodule <a name="`magicTransitSiteWan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteWan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteWan <a name="MagicTransitSiteWan" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

new magicTransitSiteWan.MagicTransitSiteWan(scope: Construct, id: string, config: MagicTransitSiteWanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig">MagicTransitSiteWanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig">MagicTransitSiteWanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing">putStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing">resetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag">resetVlanTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticAddressing` <a name="putStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing"></a>

```typescript
public putStaticAddressing(value: MagicTransitSiteWanStaticAddressing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStaticAddressing` <a name="resetStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing"></a>

```typescript
public resetStaticAddressing(): void
```

##### `resetVlanTag` <a name="resetVlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag"></a>

```typescript
public resetVlanTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

magicTransitSiteWan.MagicTransitSiteWan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitSiteWan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitSiteWan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteWan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate">healthCheckRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput">physportInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput">staticAddressingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput">vlanTagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport">physport</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag">vlanTag</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `healthCheckRate`<sup>Required</sup> <a name="healthCheckRate" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate"></a>

```typescript
public readonly healthCheckRate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing"></a>

```typescript
public readonly staticAddressing: MagicTransitSiteWanStaticAddressingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `physportInput`<sup>Optional</sup> <a name="physportInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput"></a>

```typescript
public readonly physportInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `staticAddressingInput`<sup>Optional</sup> <a name="staticAddressingInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput"></a>

```typescript
public readonly staticAddressingInput: IResolvable | MagicTransitSiteWanStaticAddressing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `vlanTagInput`<sup>Optional</sup> <a name="vlanTagInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput"></a>

```typescript
public readonly vlanTagInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport"></a>

```typescript
public readonly physport: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteWanConfig <a name="MagicTransitSiteWanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.Initializer"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

const magicTransitSiteWanConfig: magicTransitSiteWan.MagicTransitSiteWanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport">physport</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId">siteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag">vlanTag</a></code> | <code>number</code> | VLAN ID. Use zero for untagged. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport"></a>

```typescript
public readonly physport: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `staticAddressing`<sup>Optional</sup> <a name="staticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing"></a>

```typescript
public readonly staticAddressing: MagicTransitSiteWanStaticAddressing;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

##### `vlanTag`<sup>Optional</sup> <a name="vlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

### MagicTransitSiteWanStaticAddressing <a name="MagicTransitSiteWanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.Initializer"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

const magicTransitSiteWanStaticAddressing: magicTransitSiteWan.MagicTransitSiteWanStaticAddressing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address">address</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress">gatewayAddress</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress">secondaryAddress</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress"></a>

```typescript
public readonly gatewayAddress: string;
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}

---

##### `secondaryAddress`<sup>Optional</sup> <a name="secondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress"></a>

```typescript
public readonly secondaryAddress: string;
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteWanStaticAddressingOutputReference <a name="MagicTransitSiteWanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer"></a>

```typescript
import { magicTransitSiteWan } from '@cdktf/provider-cloudflare'

new magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress">resetSecondaryAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryAddress` <a name="resetSecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```typescript
public resetSecondaryAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput">gatewayAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput">secondaryAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress">gatewayAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `gatewayAddressInput`<sup>Optional</sup> <a name="gatewayAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput"></a>

```typescript
public readonly gatewayAddressInput: string;
```

- *Type:* string

---

##### `secondaryAddressInput`<sup>Optional</sup> <a name="secondaryAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```typescript
public readonly secondaryAddressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress"></a>

```typescript
public readonly gatewayAddress: string;
```

- *Type:* string

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress"></a>

```typescript
public readonly secondaryAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteWanStaticAddressing;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---



