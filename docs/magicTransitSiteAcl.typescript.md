# `magicTransitSiteAcl` Submodule <a name="`magicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteAcl <a name="MagicTransitSiteAcl" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

new magicTransitSiteAcl.MagicTransitSiteAcl(scope: Construct, id: string, config: MagicTransitSiteAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig">MagicTransitSiteAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig">MagicTransitSiteAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1">putLan1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2">putLan2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetForwardLocally">resetForwardLocally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetUnidirectional">resetUnidirectional</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLan1` <a name="putLan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1"></a>

```typescript
public putLan1(value: MagicTransitSiteAclLan1): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

---

##### `putLan2` <a name="putLan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2"></a>

```typescript
public putLan2(value: MagicTransitSiteAclLan2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.putLan2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForwardLocally` <a name="resetForwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetForwardLocally"></a>

```typescript
public resetForwardLocally(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetUnidirectional` <a name="resetUnidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.resetUnidirectional"></a>

```typescript
public resetUnidirectional(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitSiteAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference">MagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference">MagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocallyInput">forwardLocallyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1Input">lan1Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2Input">lan2Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectionalInput">unidirectionalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocally">forwardLocally</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectional">unidirectional</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1"></a>

```typescript
public readonly lan1: MagicTransitSiteAclLan1OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference">MagicTransitSiteAclLan1OutputReference</a>

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2"></a>

```typescript
public readonly lan2: MagicTransitSiteAclLan2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference">MagicTransitSiteAclLan2OutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forwardLocallyInput`<sup>Optional</sup> <a name="forwardLocallyInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocallyInput"></a>

```typescript
public readonly forwardLocallyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lan1Input`<sup>Optional</sup> <a name="lan1Input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan1Input"></a>

```typescript
public readonly lan1Input: IResolvable | MagicTransitSiteAclLan1;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

---

##### `lan2Input`<sup>Optional</sup> <a name="lan2Input" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.lan2Input"></a>

```typescript
public readonly lan2Input: IResolvable | MagicTransitSiteAclLan2;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `unidirectionalInput`<sup>Optional</sup> <a name="unidirectionalInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectionalInput"></a>

```typescript
public readonly unidirectionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forwardLocally`<sup>Required</sup> <a name="forwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.forwardLocally"></a>

```typescript
public readonly forwardLocally: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `unidirectional`<sup>Required</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.unidirectional"></a>

```typescript
public readonly unidirectional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteAclConfig <a name="MagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.Initializer"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

const magicTransitSiteAclConfig: magicTransitSiteAcl.MagicTransitSiteAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.name">name</a></code> | <code>string</code> | The name of the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.siteId">siteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.description">description</a></code> | <code>string</code> | Description for the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forwardLocally">forwardLocally</a></code> | <code>boolean \| cdktf.IResolvable</code> | The desired forwarding action for this ACL policy. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.unidirectional">unidirectional</a></code> | <code>boolean \| cdktf.IResolvable</code> | The desired traffic direction for this ACL policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan1"></a>

```typescript
public readonly lan1: MagicTransitSiteAclLan1;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}.

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.lan2"></a>

```typescript
public readonly lan2: MagicTransitSiteAclLan2;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}

---

##### `forwardLocally`<sup>Optional</sup> <a name="forwardLocally" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.forwardLocally"></a>

```typescript
public readonly forwardLocally: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The desired forwarding action for this ACL policy.

If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}.

---

##### `unidirectional`<sup>Optional</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclConfig.property.unidirectional"></a>

```typescript
public readonly unidirectional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The desired traffic direction for this ACL policy.

If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}

---

### MagicTransitSiteAclLan1 <a name="MagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.Initializer"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

const magicTransitSiteAclLan1: magicTransitSiteAcl.MagicTransitSiteAclLan1 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanId">lanId</a></code> | <code>string</code> | The identifier for the LAN you want to create an ACL policy with. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanName">lanName</a></code> | <code>string</code> | The name of the LAN based on the provided lan_id. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.portRanges">portRanges</a></code> | <code>string[]</code> | Array of port ranges on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.ports">ports</a></code> | <code>number[]</code> | Array of ports on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.subnets">subnets</a></code> | <code>string[]</code> | Array of subnet IPs within the LAN that will be included in the ACL. |

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

##### `lanName`<sup>Optional</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

### MagicTransitSiteAclLan2 <a name="MagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.Initializer"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

const magicTransitSiteAclLan2: magicTransitSiteAcl.MagicTransitSiteAclLan2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanId">lanId</a></code> | <code>string</code> | The identifier for the LAN you want to create an ACL policy with. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanName">lanName</a></code> | <code>string</code> | The name of the LAN based on the provided lan_id. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.portRanges">portRanges</a></code> | <code>string[]</code> | Array of port ranges on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.ports">ports</a></code> | <code>number[]</code> | Array of ports on the provided LAN that will be included in the ACL. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.subnets">subnets</a></code> | <code>string[]</code> | Array of subnet IPs within the LAN that will be included in the ACL. |

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

The identifier for the LAN you want to create an ACL policy with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}

---

##### `lanName`<sup>Optional</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

The name of the LAN based on the provided lan_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

Array of port ranges on the provided LAN that will be included in the ACL.

If no ports or port rangess are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

Array of ports on the provided LAN that will be included in the ACL.

If no ports or port ranges are provided, communication on any port on this LAN is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Array of subnet IPs within the LAN that will be included in the ACL.

If no subnets are provided, communication on any subnets on this LAN are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteAclLan1OutputReference <a name="MagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

new magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetLanName">resetLanName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLanName` <a name="resetLanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetLanName"></a>

```typescript
public resetLanName(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanIdInput">lanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanNameInput">lanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRangesInput">portRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portsInput">portsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanName">lanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanIdInput"></a>

```typescript
public readonly lanIdInput: string;
```

- *Type:* string

---

##### `lanNameInput`<sup>Optional</sup> <a name="lanNameInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanNameInput"></a>

```typescript
public readonly lanNameInput: string;
```

- *Type:* string

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: string[];
```

- *Type:* string[]

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: number[];
```

- *Type:* number[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteAclLan1;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan1">MagicTransitSiteAclLan1</a>

---


### MagicTransitSiteAclLan2OutputReference <a name="MagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer"></a>

```typescript
import { magicTransitSiteAcl } from '@cdktf/provider-cloudflare'

new magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetLanName">resetLanName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLanName` <a name="resetLanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetLanName"></a>

```typescript
public resetLanName(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanIdInput">lanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanNameInput">lanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRangesInput">portRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portsInput">portsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanName">lanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanIdInput"></a>

```typescript
public readonly lanIdInput: string;
```

- *Type:* string

---

##### `lanNameInput`<sup>Optional</sup> <a name="lanNameInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanNameInput"></a>

```typescript
public readonly lanNameInput: string;
```

- *Type:* string

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: string[];
```

- *Type:* string[]

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: number[];
```

- *Type:* number[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicTransitSiteAclLan2;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicTransitSiteAcl.MagicTransitSiteAclLan2">MagicTransitSiteAclLan2</a>

---



