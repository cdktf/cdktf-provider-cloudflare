# `magicTransitSite` Submodule <a name="`magicTransitSite` Submodule" id="@cdktf/provider-cloudflare.magicTransitSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSite <a name="MagicTransitSite" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

new magicTransitSite.MagicTransitSite(scope: Construct, id: string, config: MagicTransitSiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig">MagicTransitSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig">MagicTransitSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetHaMode">resetHaMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetSecondaryConnectorId">resetSecondaryConnectorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation"></a>

```typescript
public putLocation(value: MagicTransitSiteLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---

##### `resetConnectorId` <a name="resetConnectorId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetConnectorId"></a>

```typescript
public resetConnectorId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHaMode` <a name="resetHaMode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetHaMode"></a>

```typescript
public resetHaMode(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetSecondaryConnectorId` <a name="resetSecondaryConnectorId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.resetSecondaryConnectorId"></a>

```typescript
public resetSecondaryConnectorId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

magicTransitSite.MagicTransitSite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

magicTransitSite.MagicTransitSite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

magicTransitSite.MagicTransitSite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

magicTransitSite.MagicTransitSite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.location">location</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference">MagicTransitSiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haModeInput">haModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.locationInput">locationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorIdInput">secondaryConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haMode">haMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorId">secondaryConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.location"></a>

```typescript
public readonly location: MagicTransitSiteLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference">MagicTransitSiteLocationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `haModeInput`<sup>Optional</sup> <a name="haModeInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haModeInput"></a>

```typescript
public readonly haModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | MagicTransitSiteLocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secondaryConnectorIdInput`<sup>Optional</sup> <a name="secondaryConnectorIdInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorIdInput"></a>

```typescript
public readonly secondaryConnectorIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `haMode`<sup>Required</sup> <a name="haMode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haMode"></a>

```typescript
public readonly haMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secondaryConnectorId`<sup>Required</sup> <a name="secondaryConnectorId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorId"></a>

```typescript
public readonly secondaryConnectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteConfig <a name="MagicTransitSiteConfig" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.Initializer"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

const magicTransitSiteConfig: magicTransitSite.MagicTransitSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.name">name</a></code> | <code>string</code> | The name of the site. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connectorId">connectorId</a></code> | <code>string</code> | Magic Connector identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#description MagicTransitSite#description}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.haMode">haMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Site high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | Location of site in latitude and longitude. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.secondaryConnectorId">secondaryConnectorId</a></code> | <code>string</code> | Magic Connector identifier tag. Used when high availability mode is on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#name MagicTransitSite#name}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

Magic Connector identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#description MagicTransitSite#description}.

---

##### `haMode`<sup>Optional</sup> <a name="haMode" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.haMode"></a>

```typescript
public readonly haMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Site high availability mode.

If set to true, the site can have two connectors and runs in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.location"></a>

```typescript
public readonly location: MagicTransitSiteLocation;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

Location of site in latitude and longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#location MagicTransitSite#location}

---

##### `secondaryConnectorId`<sup>Optional</sup> <a name="secondaryConnectorId" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.secondaryConnectorId"></a>

```typescript
public readonly secondaryConnectorId: string;
```

- *Type:* string

Magic Connector identifier tag. Used when high availability mode is on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}

---

### MagicTransitSiteLocation <a name="MagicTransitSiteLocation" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.Initializer"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

const magicTransitSiteLocation: magicTransitSite.MagicTransitSiteLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lat">lat</a></code> | <code>string</code> | Latitude. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lon">lon</a></code> | <code>string</code> | Longitude. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lat"></a>

```typescript
public readonly lat: string;
```

- *Type:* string

Latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#lat MagicTransitSite#lat}

---

##### `lon`<sup>Optional</sup> <a name="lon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lon"></a>

```typescript
public readonly lon: string;
```

- *Type:* string

Longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/magic_transit_site#lon MagicTransitSite#lon}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLocationOutputReference <a name="MagicTransitSiteLocationOutputReference" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer"></a>

```typescript
import { magicTransitSite } from '@cdktf/provider-cloudflare'

new magicTransitSite.MagicTransitSiteLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLat">resetLat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLon">resetLon</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLat` <a name="resetLat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLat"></a>

```typescript
public resetLat(): void
```

##### `resetLon` <a name="resetLon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLon"></a>

```typescript
public resetLon(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.latInput">latInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lonInput">lonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lat">lat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lon">lon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latInput`<sup>Optional</sup> <a name="latInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.latInput"></a>

```typescript
public readonly latInput: string;
```

- *Type:* string

---

##### `lonInput`<sup>Optional</sup> <a name="lonInput" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lonInput"></a>

```typescript
public readonly lonInput: string;
```

- *Type:* string

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lat"></a>

```typescript
public readonly lat: string;
```

- *Type:* string

---

##### `lon`<sup>Required</sup> <a name="lon" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lon"></a>

```typescript
public readonly lon: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteLocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---



