# `zeroTrustDnsLocation` Submodule <a name="`zeroTrustDnsLocation` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDnsLocation <a name="ZeroTrustDnsLocation" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocation(scope: Construct, id: string, config: ZeroTrustDnsLocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig">ZeroTrustDnsLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig">ZeroTrustDnsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetClientDefault">resetClientDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpsId">resetDnsDestinationIpsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEcsSupport">resetEcsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetNetworks">resetNetworks</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints"></a>

```typescript
public putEndpoints(value: ZeroTrustDnsLocationEndpoints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | ZeroTrustDnsLocationNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]

---

##### `resetClientDefault` <a name="resetClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetClientDefault"></a>

```typescript
public resetClientDefault(): void
```

##### `resetDnsDestinationIpsId` <a name="resetDnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpsId"></a>

```typescript
public resetDnsDestinationIpsId(): void
```

##### `resetEcsSupport` <a name="resetEcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEcsSupport"></a>

```typescript
public resetEcsSupport(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDnsLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDnsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDnsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId">dnsDestinationIpv6BlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dohSubdomain">dohSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference">ZeroTrustDnsLocationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4Destination">ipv4Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4DestinationBackup">ipv4DestinationBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList">ZeroTrustDnsLocationNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefaultInput">clientDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsIdInput">dnsDestinationIpsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupportInput">ecsSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefault">clientDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsId">dnsDestinationIpsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupport">ecsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsDestinationIpv6BlockId`<sup>Required</sup> <a name="dnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId"></a>

```typescript
public readonly dnsDestinationIpv6BlockId: string;
```

- *Type:* string

---

##### `dohSubdomain`<sup>Required</sup> <a name="dohSubdomain" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dohSubdomain"></a>

```typescript
public readonly dohSubdomain: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpoints"></a>

```typescript
public readonly endpoints: ZeroTrustDnsLocationEndpointsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference">ZeroTrustDnsLocationEndpointsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ipv4Destination`<sup>Required</sup> <a name="ipv4Destination" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4Destination"></a>

```typescript
public readonly ipv4Destination: string;
```

- *Type:* string

---

##### `ipv4DestinationBackup`<sup>Required</sup> <a name="ipv4DestinationBackup" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4DestinationBackup"></a>

```typescript
public readonly ipv4DestinationBackup: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networks"></a>

```typescript
public readonly networks: ZeroTrustDnsLocationNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList">ZeroTrustDnsLocationNetworksList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `clientDefaultInput`<sup>Optional</sup> <a name="clientDefaultInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefaultInput"></a>

```typescript
public readonly clientDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsDestinationIpsIdInput`<sup>Optional</sup> <a name="dnsDestinationIpsIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsIdInput"></a>

```typescript
public readonly dnsDestinationIpsIdInput: string;
```

- *Type:* string

---

##### `ecsSupportInput`<sup>Optional</sup> <a name="ecsSupportInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupportInput"></a>

```typescript
public readonly ecsSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | ZeroTrustDnsLocationEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | ZeroTrustDnsLocationNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `clientDefault`<sup>Required</sup> <a name="clientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefault"></a>

```typescript
public readonly clientDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsDestinationIpsId`<sup>Required</sup> <a name="dnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsId"></a>

```typescript
public readonly dnsDestinationIpsId: string;
```

- *Type:* string

---

##### `ecsSupport`<sup>Required</sup> <a name="ecsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupport"></a>

```typescript
public readonly ecsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDnsLocationConfig <a name="ZeroTrustDnsLocationConfig" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationConfig: zeroTrustDnsLocation.ZeroTrustDnsLocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.name">name</a></code> | <code>string</code> | Specify the location name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.clientDefault">clientDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate whether this location is the default location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpsId">dnsDestinationIpsId</a></code> | <code>string</code> | Specify the identifier of the pair of IPv4 addresses assigned to this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.ecsSupport">ecsSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate whether the location must resolve EDNS queries. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | Configure the destination endpoints for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]</code> | Specify the list of network ranges from which requests at this location originate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specify the location name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#name ZeroTrustDnsLocation#name}

---

##### `clientDefault`<sup>Optional</sup> <a name="clientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.clientDefault"></a>

```typescript
public readonly clientDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate whether this location is the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#client_default ZeroTrustDnsLocation#client_default}

---

##### `dnsDestinationIpsId`<sup>Optional</sup> <a name="dnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpsId"></a>

```typescript
public readonly dnsDestinationIpsId: string;
```

- *Type:* string

Specify the identifier of the pair of IPv4 addresses assigned to this location.

When creating a location, if this field is absent or set to null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if this field is absent or set to null, the pre-assigned pair remains unchanged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#dns_destination_ips_id ZeroTrustDnsLocation#dns_destination_ips_id}

---

##### `ecsSupport`<sup>Optional</sup> <a name="ecsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.ecsSupport"></a>

```typescript
public readonly ecsSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate whether the location must resolve EDNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#ecs_support ZeroTrustDnsLocation#ecs_support}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.endpoints"></a>

```typescript
public readonly endpoints: ZeroTrustDnsLocationEndpoints;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

Configure the destination endpoints for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#endpoints ZeroTrustDnsLocation#endpoints}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | ZeroTrustDnsLocationNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]

Specify the list of network ranges from which requests at this location originate.

The list takes effect only if it is non-empty and the IPv4 endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpoints <a name="ZeroTrustDnsLocationEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpoints: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.doh">doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.dot">dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}. |

---

##### `doh`<sup>Required</sup> <a name="doh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.doh"></a>

```typescript
public readonly doh: ZeroTrustDnsLocationEndpointsDoh;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}.

---

##### `dot`<sup>Required</sup> <a name="dot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.dot"></a>

```typescript
public readonly dot: ZeroTrustDnsLocationEndpointsDot;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}.

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv4"></a>

```typescript
public readonly ipv4: ZeroTrustDnsLocationEndpointsIpv4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}.

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv6"></a>

```typescript
public readonly ipv6: ZeroTrustDnsLocationEndpointsIpv6;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}.

---

### ZeroTrustDnsLocationEndpointsDoh <a name="ZeroTrustDnsLocationEndpointsDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsDoh: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate whether the DOH endpoint is enabled for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]</code> | Specify the list of allowed source IP network ranges for this endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.requireToken">requireToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether the DOH endpoint requires user identity authentication. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate whether the DOH endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.networks"></a>

```typescript
public readonly networks: IResolvable | ZeroTrustDnsLocationEndpointsDohNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]

Specify the list of allowed source IP network ranges for this endpoint.

When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

##### `requireToken`<sup>Optional</sup> <a name="requireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.requireToken"></a>

```typescript
public readonly requireToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether the DOH endpoint requires user identity authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#require_token ZeroTrustDnsLocation#require_token}

---

### ZeroTrustDnsLocationEndpointsDohNetworks <a name="ZeroTrustDnsLocationEndpointsDohNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsDohNetworks: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.property.network">network</a></code> | <code>string</code> | Specify the IP address or IP CIDR. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Specify the IP address or IP CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

### ZeroTrustDnsLocationEndpointsDot <a name="ZeroTrustDnsLocationEndpointsDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsDot: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate whether the DOT endpoint is enabled for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]</code> | Specify the list of allowed source IP network ranges for this endpoint. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate whether the DOT endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.networks"></a>

```typescript
public readonly networks: IResolvable | ZeroTrustDnsLocationEndpointsDotNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]

Specify the list of allowed source IP network ranges for this endpoint.

When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpointsDotNetworks <a name="ZeroTrustDnsLocationEndpointsDotNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsDotNetworks: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.property.network">network</a></code> | <code>string</code> | Specify the IP address or IP CIDR. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Specify the IP address or IP CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

### ZeroTrustDnsLocationEndpointsIpv4 <a name="ZeroTrustDnsLocationEndpointsIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsIpv4: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate whether the IPv4 endpoint is enabled for this location. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate whether the IPv4 endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

### ZeroTrustDnsLocationEndpointsIpv6 <a name="ZeroTrustDnsLocationEndpointsIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsIpv6: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate whether the IPV6 endpoint is enabled for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]</code> | Specify the list of allowed source IPv6 network ranges for this endpoint. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate whether the IPV6 endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.networks"></a>

```typescript
public readonly networks: IResolvable | ZeroTrustDnsLocationEndpointsIpv6Networks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]

Specify the list of allowed source IPv6 network ranges for this endpoint.

When the list is empty, the endpoint allows all source IPs. The list takes effect only if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpointsIpv6Networks <a name="ZeroTrustDnsLocationEndpointsIpv6Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationEndpointsIpv6Networks: zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.property.network">network</a></code> | <code>string</code> | Specify the IPv6 address or IPv6 CIDR. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Specify the IPv6 address or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

### ZeroTrustDnsLocationNetworks <a name="ZeroTrustDnsLocationNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

const zeroTrustDnsLocationNetworks: zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.property.network">network</a></code> | <code>string</code> | Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Specify the IPv4 address or IPv4 CIDR. Limit IPv4 CIDRs to a maximum of /24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDnsLocationEndpointsDohNetworksList <a name="ZeroTrustDnsLocationEndpointsDohNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get"></a>

```typescript
public get(index: number): ZeroTrustDnsLocationEndpointsDohNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsDohNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]

---


### ZeroTrustDnsLocationEndpointsDohNetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsDohNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsDohNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>

---


### ZeroTrustDnsLocationEndpointsDohOutputReference <a name="ZeroTrustDnsLocationEndpointsDohOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetRequireToken">resetRequireToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | ZeroTrustDnsLocationEndpointsDohNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetRequireToken` <a name="resetRequireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetRequireToken"></a>

```typescript
public resetRequireToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList">ZeroTrustDnsLocationEndpointsDohNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireTokenInput">requireTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken">requireToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networks"></a>

```typescript
public readonly networks: ZeroTrustDnsLocationEndpointsDohNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList">ZeroTrustDnsLocationEndpointsDohNetworksList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | ZeroTrustDnsLocationEndpointsDohNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks">ZeroTrustDnsLocationEndpointsDohNetworks</a>[]

---

##### `requireTokenInput`<sup>Optional</sup> <a name="requireTokenInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireTokenInput"></a>

```typescript
public readonly requireTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireToken`<sup>Required</sup> <a name="requireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken"></a>

```typescript
public readonly requireToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsDoh;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---


### ZeroTrustDnsLocationEndpointsDotNetworksList <a name="ZeroTrustDnsLocationEndpointsDotNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get"></a>

```typescript
public get(index: number): ZeroTrustDnsLocationEndpointsDotNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsDotNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]

---


### ZeroTrustDnsLocationEndpointsDotNetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsDotNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsDotNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>

---


### ZeroTrustDnsLocationEndpointsDotOutputReference <a name="ZeroTrustDnsLocationEndpointsDotOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetNetworks">resetNetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | ZeroTrustDnsLocationEndpointsDotNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetNetworks"></a>

```typescript
public resetNetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList">ZeroTrustDnsLocationEndpointsDotNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networks"></a>

```typescript
public readonly networks: ZeroTrustDnsLocationEndpointsDotNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList">ZeroTrustDnsLocationEndpointsDotNetworksList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | ZeroTrustDnsLocationEndpointsDotNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks">ZeroTrustDnsLocationEndpointsDotNetworks</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsDot;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---


### ZeroTrustDnsLocationEndpointsIpv4OutputReference <a name="ZeroTrustDnsLocationEndpointsIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---


### ZeroTrustDnsLocationEndpointsIpv6NetworksList <a name="ZeroTrustDnsLocationEndpointsIpv6NetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get"></a>

```typescript
public get(index: number): ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsIpv6Networks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]

---


### ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsIpv6Networks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>

---


### ZeroTrustDnsLocationEndpointsIpv6OutputReference <a name="ZeroTrustDnsLocationEndpointsIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetNetworks">resetNetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | ZeroTrustDnsLocationEndpointsIpv6Networks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetNetworks"></a>

```typescript
public resetNetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList">ZeroTrustDnsLocationEndpointsIpv6NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks"></a>

```typescript
public readonly networks: ZeroTrustDnsLocationEndpointsIpv6NetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList">ZeroTrustDnsLocationEndpointsIpv6NetworksList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | ZeroTrustDnsLocationEndpointsIpv6Networks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks">ZeroTrustDnsLocationEndpointsIpv6Networks</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpointsIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---


### ZeroTrustDnsLocationEndpointsOutputReference <a name="ZeroTrustDnsLocationEndpointsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh">putDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot">putDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6">putIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDoh` <a name="putDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh"></a>

```typescript
public putDoh(value: ZeroTrustDnsLocationEndpointsDoh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---

##### `putDot` <a name="putDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot"></a>

```typescript
public putDot(value: ZeroTrustDnsLocationEndpointsDot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4"></a>

```typescript
public putIpv4(value: ZeroTrustDnsLocationEndpointsIpv4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6"></a>

```typescript
public putIpv6(value: ZeroTrustDnsLocationEndpointsIpv6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.doh">doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference">ZeroTrustDnsLocationEndpointsDohOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dot">dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference">ZeroTrustDnsLocationEndpointsDotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference">ZeroTrustDnsLocationEndpointsIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference">ZeroTrustDnsLocationEndpointsIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dohInput">dohInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dotInput">dotInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `doh`<sup>Required</sup> <a name="doh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.doh"></a>

```typescript
public readonly doh: ZeroTrustDnsLocationEndpointsDohOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference">ZeroTrustDnsLocationEndpointsDohOutputReference</a>

---

##### `dot`<sup>Required</sup> <a name="dot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dot"></a>

```typescript
public readonly dot: ZeroTrustDnsLocationEndpointsDotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference">ZeroTrustDnsLocationEndpointsDotOutputReference</a>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: ZeroTrustDnsLocationEndpointsIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference">ZeroTrustDnsLocationEndpointsIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: ZeroTrustDnsLocationEndpointsIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference">ZeroTrustDnsLocationEndpointsIpv6OutputReference</a>

---

##### `dohInput`<sup>Optional</sup> <a name="dohInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dohInput"></a>

```typescript
public readonly dohInput: IResolvable | ZeroTrustDnsLocationEndpointsDoh;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---

##### `dotInput`<sup>Optional</sup> <a name="dotInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dotInput"></a>

```typescript
public readonly dotInput: IResolvable | ZeroTrustDnsLocationEndpointsDot;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: IResolvable | ZeroTrustDnsLocationEndpointsIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: IResolvable | ZeroTrustDnsLocationEndpointsIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationEndpoints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---


### ZeroTrustDnsLocationNetworksList <a name="ZeroTrustDnsLocationNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get"></a>

```typescript
public get(index: number): ZeroTrustDnsLocationNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>[]

---


### ZeroTrustDnsLocationNetworksOutputReference <a name="ZeroTrustDnsLocationNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer"></a>

```typescript
import { zeroTrustDnsLocation } from '@cdktf/provider-cloudflare'

new zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDnsLocationNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks">ZeroTrustDnsLocationNetworks</a>

---



