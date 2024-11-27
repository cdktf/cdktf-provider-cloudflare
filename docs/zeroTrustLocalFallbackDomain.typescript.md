# `zeroTrustLocalFallbackDomain` Submodule <a name="`zeroTrustLocalFallbackDomain` Submodule" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustLocalFallbackDomain <a name="ZeroTrustLocalFallbackDomain" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain cloudflare_zero_trust_local_fallback_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

new zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain(scope: Construct, id: string, config: ZeroTrustLocalFallbackDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig">ZeroTrustLocalFallbackDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig">ZeroTrustLocalFallbackDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.putDomains">putDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDomains` <a name="putDomains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.putDomains"></a>

```typescript
public putDomains(value: IResolvable | ZeroTrustLocalFallbackDomainDomains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.putDomains.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustLocalFallbackDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustLocalFallbackDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustLocalFallbackDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustLocalFallbackDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustLocalFallbackDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList">ZeroTrustLocalFallbackDomainDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domainsInput">domainsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domains"></a>

```typescript
public readonly domains: ZeroTrustLocalFallbackDomainDomainsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList">ZeroTrustLocalFallbackDomainDomainsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domainsInput"></a>

```typescript
public readonly domainsInput: IResolvable | ZeroTrustLocalFallbackDomainDomains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustLocalFallbackDomainConfig <a name="ZeroTrustLocalFallbackDomainConfig" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.Initializer"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

const zeroTrustLocalFallbackDomainConfig: zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.domains">domains</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]</code> | domains block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#id ZeroTrustLocalFallbackDomain#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.policyId">policyId</a></code> | <code>string</code> | The settings policy for which to configure this fallback domain policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#account_id ZeroTrustLocalFallbackDomain#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.domains"></a>

```typescript
public readonly domains: IResolvable | ZeroTrustLocalFallbackDomainDomains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#domains ZeroTrustLocalFallbackDomain#domains}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#id ZeroTrustLocalFallbackDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The settings policy for which to configure this fallback domain policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#policy_id ZeroTrustLocalFallbackDomain#policy_id}

---

### ZeroTrustLocalFallbackDomainDomains <a name="ZeroTrustLocalFallbackDomainDomains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.Initializer"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

const zeroTrustLocalFallbackDomainDomains: zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.description">description</a></code> | <code>string</code> | A description of the fallback domain, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | A list of IP addresses to handle domain resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.suffix">suffix</a></code> | <code>string</code> | The domain suffix to match when resolving locally. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the fallback domain, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#description ZeroTrustLocalFallbackDomain#description}

---

##### `dnsServer`<sup>Optional</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

A list of IP addresses to handle domain resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#dns_server ZeroTrustLocalFallbackDomain#dns_server}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

The domain suffix to match when resolving locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_local_fallback_domain#suffix ZeroTrustLocalFallbackDomain#suffix}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustLocalFallbackDomainDomainsList <a name="ZeroTrustLocalFallbackDomainDomainsList" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

new zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.get"></a>

```typescript
public get(index: number): ZeroTrustLocalFallbackDomainDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustLocalFallbackDomainDomains[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>[]

---


### ZeroTrustLocalFallbackDomainDomainsOutputReference <a name="ZeroTrustLocalFallbackDomainDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer"></a>

```typescript
import { zeroTrustLocalFallbackDomain } from '@cdktf/provider-cloudflare'

new zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDnsServer">resetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDnsServer` <a name="resetDnsServer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDnsServer"></a>

```typescript
public resetDnsServer(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServerInput">dnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServerInput"></a>

```typescript
public readonly dnsServerInput: string[];
```

- *Type:* string[]

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustLocalFallbackDomainDomains;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains">ZeroTrustLocalFallbackDomainDomains</a>

---



