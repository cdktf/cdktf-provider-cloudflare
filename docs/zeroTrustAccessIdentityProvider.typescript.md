# `zeroTrustAccessIdentityProvider` Submodule <a name="`zeroTrustAccessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessIdentityProvider <a name="ZeroTrustAccessIdentityProvider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

new zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider(scope: Construct, id: string, config: ZeroTrustAccessIdentityProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig">ZeroTrustAccessIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig">ZeroTrustAccessIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig">putScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetScimConfig">resetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig"></a>

```typescript
public putConfig(value: IResolvable | ZeroTrustAccessIdentityProviderConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]

---

##### `putScimConfig` <a name="putScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig"></a>

```typescript
public putScimConfig(value: IResolvable | ZeroTrustAccessIdentityProviderScimConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScimConfig` <a name="resetScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetScimConfig"></a>

```typescript
public resetScimConfig(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList">ZeroTrustAccessIdentityProviderConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfig">scimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList">ZeroTrustAccessIdentityProviderScimConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfigInput">scimConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.config"></a>

```typescript
public readonly config: ZeroTrustAccessIdentityProviderConfigAList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList">ZeroTrustAccessIdentityProviderConfigAList</a>

---

##### `scimConfig`<sup>Required</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfig"></a>

```typescript
public readonly scimConfig: ZeroTrustAccessIdentityProviderScimConfigList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList">ZeroTrustAccessIdentityProviderScimConfigList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ZeroTrustAccessIdentityProviderConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scimConfigInput`<sup>Optional</sup> <a name="scimConfigInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfigInput"></a>

```typescript
public readonly scimConfigInput: IResolvable | ZeroTrustAccessIdentityProviderScimConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessIdentityProviderConfig <a name="ZeroTrustAccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

const zeroTrustAccessIdentityProviderConfig: zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.name">name</a></code> | <code>string</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.type">type</a></code> | <code>string</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.config">config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#id ZeroTrustAccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.scimConfig">scimConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]</code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#name ZeroTrustAccessIdentityProvider#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#type ZeroTrustAccessIdentityProvider#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#account_id ZeroTrustAccessIdentityProvider#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.config"></a>

```typescript
public readonly config: IResolvable | ZeroTrustAccessIdentityProviderConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#config ZeroTrustAccessIdentityProvider#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#id ZeroTrustAccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scimConfig`<sup>Optional</sup> <a name="scimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.scimConfig"></a>

```typescript
public readonly scimConfig: IResolvable | ZeroTrustAccessIdentityProviderScimConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#scim_config ZeroTrustAccessIdentityProvider#scim_config}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#zone_id ZeroTrustAccessIdentityProvider#zone_id}

---

### ZeroTrustAccessIdentityProviderConfigA <a name="ZeroTrustAccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

const zeroTrustAccessIdentityProviderConfigA: zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.apiToken">apiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#api_token ZeroTrustAccessIdentityProvider#api_token}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.appsDomain">appsDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.attributes">attributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authorizationServerId">authorizationServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authUrl">authUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAccount">centrifyAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAppId">centrifyAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.certsUrl">certsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.claims">claims</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.conditionalAccessEnabled">conditionalAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailAttributeName">emailAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailClaimName">emailClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.idpPublicCert">idpPublicCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#idp_public_cert ZeroTrustAccessIdentityProvider#idp_public_cert}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oktaAccount">oktaAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oneloginAccount">oneloginAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pingEnvId">pingEnvId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pkceEnabled">pkceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.signRequest">signRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.ssoTargetUrl">ssoTargetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.supportGroups">supportGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}. |

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#api_token ZeroTrustAccessIdentityProvider#api_token}.

---

##### `appsDomain`<sup>Optional</sup> <a name="appsDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.appsDomain"></a>

```typescript
public readonly appsDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}.

---

##### `authorizationServerId`<sup>Optional</sup> <a name="authorizationServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authorizationServerId"></a>

```typescript
public readonly authorizationServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}.

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}.

---

##### `centrifyAccount`<sup>Optional</sup> <a name="centrifyAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAccount"></a>

```typescript
public readonly centrifyAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}.

---

##### `centrifyAppId`<sup>Optional</sup> <a name="centrifyAppId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAppId"></a>

```typescript
public readonly centrifyAppId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}.

---

##### `certsUrl`<sup>Optional</sup> <a name="certsUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.certsUrl"></a>

```typescript
public readonly certsUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}.

---

##### `claims`<sup>Optional</sup> <a name="claims" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.claims"></a>

```typescript
public readonly claims: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}.

---

##### `conditionalAccessEnabled`<sup>Optional</sup> <a name="conditionalAccessEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.conditionalAccessEnabled"></a>

```typescript
public readonly conditionalAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}.

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}.

---

##### `emailAttributeName`<sup>Optional</sup> <a name="emailAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailAttributeName"></a>

```typescript
public readonly emailAttributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}.

---

##### `emailClaimName`<sup>Optional</sup> <a name="emailClaimName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailClaimName"></a>

```typescript
public readonly emailClaimName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}.

---

##### `idpPublicCert`<sup>Optional</sup> <a name="idpPublicCert" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.idpPublicCert"></a>

```typescript
public readonly idpPublicCert: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#idp_public_cert ZeroTrustAccessIdentityProvider#idp_public_cert}.

---

##### `issuerUrl`<sup>Optional</sup> <a name="issuerUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}.

---

##### `oktaAccount`<sup>Optional</sup> <a name="oktaAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oktaAccount"></a>

```typescript
public readonly oktaAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}.

---

##### `oneloginAccount`<sup>Optional</sup> <a name="oneloginAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oneloginAccount"></a>

```typescript
public readonly oneloginAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}.

---

##### `pingEnvId`<sup>Optional</sup> <a name="pingEnvId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pingEnvId"></a>

```typescript
public readonly pingEnvId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}.

---

##### `pkceEnabled`<sup>Optional</sup> <a name="pkceEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pkceEnabled"></a>

```typescript
public readonly pkceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}.

---

##### `signRequest`<sup>Optional</sup> <a name="signRequest" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.signRequest"></a>

```typescript
public readonly signRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}.

---

##### `ssoTargetUrl`<sup>Optional</sup> <a name="ssoTargetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```typescript
public readonly ssoTargetUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}.

---

##### `supportGroups`<sup>Optional</sup> <a name="supportGroups" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.supportGroups"></a>

```typescript
public readonly supportGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}.

---

### ZeroTrustAccessIdentityProviderScimConfig <a name="ZeroTrustAccessIdentityProviderScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

const zeroTrustAccessIdentityProviderScimConfig: zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#enabled ZeroTrustAccessIdentityProvider#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.groupMemberDeprovision">groupMemberDeprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#group_member_deprovision ZeroTrustAccessIdentityProvider#group_member_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.seatDeprovision">seatDeprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#seat_deprovision ZeroTrustAccessIdentityProvider#seat_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#secret ZeroTrustAccessIdentityProvider#secret}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.userDeprovision">userDeprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#user_deprovision ZeroTrustAccessIdentityProvider#user_deprovision}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#enabled ZeroTrustAccessIdentityProvider#enabled}.

---

##### `groupMemberDeprovision`<sup>Optional</sup> <a name="groupMemberDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.groupMemberDeprovision"></a>

```typescript
public readonly groupMemberDeprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#group_member_deprovision ZeroTrustAccessIdentityProvider#group_member_deprovision}.

---

##### `seatDeprovision`<sup>Optional</sup> <a name="seatDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.seatDeprovision"></a>

```typescript
public readonly seatDeprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#seat_deprovision ZeroTrustAccessIdentityProvider#seat_deprovision}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#secret ZeroTrustAccessIdentityProvider#secret}.

---

##### `userDeprovision`<sup>Optional</sup> <a name="userDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.userDeprovision"></a>

```typescript
public readonly userDeprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.40.0/docs/resources/zero_trust_access_identity_provider#user_deprovision ZeroTrustAccessIdentityProvider#user_deprovision}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessIdentityProviderConfigAList <a name="ZeroTrustAccessIdentityProviderConfigAList" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

new zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessIdentityProviderConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessIdentityProviderConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>[]

---


### ZeroTrustAccessIdentityProviderConfigAOutputReference <a name="ZeroTrustAccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

new zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAppsDomain">resetAppsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId">resetAuthorizationServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">resetCentrifyAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">resetCentrifyAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCertsUrl">resetCertsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClaims">resetClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled">resetConditionalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">resetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailClaimName">resetEmailClaimName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIdpPublicCert">resetIdpPublicCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIssuerUrl">resetIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOktaAccount">resetOktaAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOneloginAccount">resetOneloginAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPingEnvId">resetPingEnvId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPkceEnabled">resetPkceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSignRequest">resetSignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">resetSsoTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSupportGroups">resetSupportGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetApiToken"></a>

```typescript
public resetApiToken(): void
```

##### `resetAppsDomain` <a name="resetAppsDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```typescript
public resetAppsDomain(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAuthorizationServerId` <a name="resetAuthorizationServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId"></a>

```typescript
public resetAuthorizationServerId(): void
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```typescript
public resetAuthUrl(): void
```

##### `resetCentrifyAccount` <a name="resetCentrifyAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```typescript
public resetCentrifyAccount(): void
```

##### `resetCentrifyAppId` <a name="resetCentrifyAppId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```typescript
public resetCentrifyAppId(): void
```

##### `resetCertsUrl` <a name="resetCertsUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```typescript
public resetCertsUrl(): void
```

##### `resetClaims` <a name="resetClaims" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClaims"></a>

```typescript
public resetClaims(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetConditionalAccessEnabled` <a name="resetConditionalAccessEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled"></a>

```typescript
public resetConditionalAccessEnabled(): void
```

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetEmailAttributeName` <a name="resetEmailAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```typescript
public resetEmailAttributeName(): void
```

##### `resetEmailClaimName` <a name="resetEmailClaimName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailClaimName"></a>

```typescript
public resetEmailClaimName(): void
```

##### `resetIdpPublicCert` <a name="resetIdpPublicCert" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIdpPublicCert"></a>

```typescript
public resetIdpPublicCert(): void
```

##### `resetIssuerUrl` <a name="resetIssuerUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```typescript
public resetIssuerUrl(): void
```

##### `resetOktaAccount` <a name="resetOktaAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```typescript
public resetOktaAccount(): void
```

##### `resetOneloginAccount` <a name="resetOneloginAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```typescript
public resetOneloginAccount(): void
```

##### `resetPingEnvId` <a name="resetPingEnvId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPingEnvId"></a>

```typescript
public resetPingEnvId(): void
```

##### `resetPkceEnabled` <a name="resetPkceEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```typescript
public resetPkceEnabled(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSignRequest` <a name="resetSignRequest" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```typescript
public resetSignRequest(): void
```

##### `resetSsoTargetUrl` <a name="resetSsoTargetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```typescript
public resetSsoTargetUrl(): void
```

##### `resetSupportGroups` <a name="resetSupportGroups" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```typescript
public resetSupportGroups(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomainInput">appsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributesInput">attributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput">authorizationServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">centrifyAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">centrifyAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrlInput">certsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claimsInput">claimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput">conditionalAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">emailAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput">emailClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput">idpPublicCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">oktaAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">oneloginAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput">pingEnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">pkceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequestInput">signRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">ssoTargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">supportGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain">appsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes">attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId">authorizationServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount">centrifyAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId">centrifyAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl">certsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims">claims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">conditionalAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName">emailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName">emailClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCert">idpPublicCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount">oktaAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount">oneloginAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId">pingEnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled">pkceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest">signRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">ssoTargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups">supportGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `appsDomainInput`<sup>Optional</sup> <a name="appsDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```typescript
public readonly appsDomainInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: string[];
```

- *Type:* string[]

---

##### `authorizationServerIdInput`<sup>Optional</sup> <a name="authorizationServerIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput"></a>

```typescript
public readonly authorizationServerIdInput: string;
```

- *Type:* string

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```typescript
public readonly authUrlInput: string;
```

- *Type:* string

---

##### `centrifyAccountInput`<sup>Optional</sup> <a name="centrifyAccountInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```typescript
public readonly centrifyAccountInput: string;
```

- *Type:* string

---

##### `centrifyAppIdInput`<sup>Optional</sup> <a name="centrifyAppIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```typescript
public readonly centrifyAppIdInput: string;
```

- *Type:* string

---

##### `certsUrlInput`<sup>Optional</sup> <a name="certsUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```typescript
public readonly certsUrlInput: string;
```

- *Type:* string

---

##### `claimsInput`<sup>Optional</sup> <a name="claimsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claimsInput"></a>

```typescript
public readonly claimsInput: string[];
```

- *Type:* string[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `conditionalAccessEnabledInput`<sup>Optional</sup> <a name="conditionalAccessEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput"></a>

```typescript
public readonly conditionalAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `emailAttributeNameInput`<sup>Optional</sup> <a name="emailAttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```typescript
public readonly emailAttributeNameInput: string;
```

- *Type:* string

---

##### `emailClaimNameInput`<sup>Optional</sup> <a name="emailClaimNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput"></a>

```typescript
public readonly emailClaimNameInput: string;
```

- *Type:* string

---

##### `idpPublicCertInput`<sup>Optional</sup> <a name="idpPublicCertInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput"></a>

```typescript
public readonly idpPublicCertInput: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `oktaAccountInput`<sup>Optional</sup> <a name="oktaAccountInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```typescript
public readonly oktaAccountInput: string;
```

- *Type:* string

---

##### `oneloginAccountInput`<sup>Optional</sup> <a name="oneloginAccountInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```typescript
public readonly oneloginAccountInput: string;
```

- *Type:* string

---

##### `pingEnvIdInput`<sup>Optional</sup> <a name="pingEnvIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput"></a>

```typescript
public readonly pingEnvIdInput: string;
```

- *Type:* string

---

##### `pkceEnabledInput`<sup>Optional</sup> <a name="pkceEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```typescript
public readonly pkceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `signRequestInput`<sup>Optional</sup> <a name="signRequestInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```typescript
public readonly signRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssoTargetUrlInput`<sup>Optional</sup> <a name="ssoTargetUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```typescript
public readonly ssoTargetUrlInput: string;
```

- *Type:* string

---

##### `supportGroupsInput`<sup>Optional</sup> <a name="supportGroupsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```typescript
public readonly supportGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `appsDomain`<sup>Required</sup> <a name="appsDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```typescript
public readonly appsDomain: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string[];
```

- *Type:* string[]

---

##### `authorizationServerId`<sup>Required</sup> <a name="authorizationServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```typescript
public readonly authorizationServerId: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `centrifyAccount`<sup>Required</sup> <a name="centrifyAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```typescript
public readonly centrifyAccount: string;
```

- *Type:* string

---

##### `centrifyAppId`<sup>Required</sup> <a name="centrifyAppId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```typescript
public readonly centrifyAppId: string;
```

- *Type:* string

---

##### `certsUrl`<sup>Required</sup> <a name="certsUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```typescript
public readonly certsUrl: string;
```

- *Type:* string

---

##### `claims`<sup>Required</sup> <a name="claims" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims"></a>

```typescript
public readonly claims: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `conditionalAccessEnabled`<sup>Required</sup> <a name="conditionalAccessEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```typescript
public readonly conditionalAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `emailAttributeName`<sup>Required</sup> <a name="emailAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```typescript
public readonly emailAttributeName: string;
```

- *Type:* string

---

##### `emailClaimName`<sup>Required</sup> <a name="emailClaimName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```typescript
public readonly emailClaimName: string;
```

- *Type:* string

---

##### `idpPublicCert`<sup>Required</sup> <a name="idpPublicCert" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCert"></a>

```typescript
public readonly idpPublicCert: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `oktaAccount`<sup>Required</sup> <a name="oktaAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```typescript
public readonly oktaAccount: string;
```

- *Type:* string

---

##### `oneloginAccount`<sup>Required</sup> <a name="oneloginAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```typescript
public readonly oneloginAccount: string;
```

- *Type:* string

---

##### `pingEnvId`<sup>Required</sup> <a name="pingEnvId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```typescript
public readonly pingEnvId: string;
```

- *Type:* string

---

##### `pkceEnabled`<sup>Required</sup> <a name="pkceEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```typescript
public readonly pkceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `signRequest`<sup>Required</sup> <a name="signRequest" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```typescript
public readonly signRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssoTargetUrl`<sup>Required</sup> <a name="ssoTargetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```typescript
public readonly ssoTargetUrl: string;
```

- *Type:* string

---

##### `supportGroups`<sup>Required</sup> <a name="supportGroups" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```typescript
public readonly supportGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessIdentityProviderConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA">ZeroTrustAccessIdentityProviderConfigA</a>

---


### ZeroTrustAccessIdentityProviderScimConfigList <a name="ZeroTrustAccessIdentityProviderScimConfigList" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

new zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.get"></a>

```typescript
public get(index: number): ZeroTrustAccessIdentityProviderScimConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessIdentityProviderScimConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>[]

---


### ZeroTrustAccessIdentityProviderScimConfigOutputReference <a name="ZeroTrustAccessIdentityProviderScimConfigOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```typescript
import { zeroTrustAccessIdentityProvider } from '@cdktf/provider-cloudflare'

new zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision">resetGroupMemberDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision">resetSeatDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetUserDeprovision">resetUserDeprovision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetGroupMemberDeprovision` <a name="resetGroupMemberDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision"></a>

```typescript
public resetGroupMemberDeprovision(): void
```

##### `resetSeatDeprovision` <a name="resetSeatDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision"></a>

```typescript
public resetSeatDeprovision(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetUserDeprovision` <a name="resetUserDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetUserDeprovision"></a>

```typescript
public resetUserDeprovision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput">groupMemberDeprovisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput">seatDeprovisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput">userDeprovisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision">groupMemberDeprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">seatDeprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision">userDeprovision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupMemberDeprovisionInput`<sup>Optional</sup> <a name="groupMemberDeprovisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput"></a>

```typescript
public readonly groupMemberDeprovisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `seatDeprovisionInput`<sup>Optional</sup> <a name="seatDeprovisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput"></a>

```typescript
public readonly seatDeprovisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `userDeprovisionInput`<sup>Optional</sup> <a name="userDeprovisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput"></a>

```typescript
public readonly userDeprovisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupMemberDeprovision`<sup>Required</sup> <a name="groupMemberDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision"></a>

```typescript
public readonly groupMemberDeprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `seatDeprovision`<sup>Required</sup> <a name="seatDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```typescript
public readonly seatDeprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `userDeprovision`<sup>Required</sup> <a name="userDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```typescript
public readonly userDeprovision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustAccessIdentityProviderScimConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig">ZeroTrustAccessIdentityProviderScimConfig</a>

---



