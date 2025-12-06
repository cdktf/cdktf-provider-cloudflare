# `dnsZoneTransfersPeer` Submodule <a name="`dnsZoneTransfersPeer` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersPeer <a name="DnsZoneTransfersPeer" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer"></a>

```typescript
import { dnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

new dnsZoneTransfersPeer.DnsZoneTransfersPeer(scope: Construct, id: string, config: DnsZoneTransfersPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig">DnsZoneTransfersPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig">DnsZoneTransfersPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable">resetIxfrEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId">resetTsigId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetIxfrEnable` <a name="resetIxfrEnable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable"></a>

```typescript
public resetIxfrEnable(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTsigId` <a name="resetTsigId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId"></a>

```typescript
public resetTsigId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct"></a>

```typescript
import { dnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement"></a>

```typescript
import { dnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource"></a>

```typescript
import { dnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport"></a>

```typescript
import { dnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsZoneTransfersPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsZoneTransfersPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput">ixfrEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput">tsigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable">ixfrEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId">tsigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `ixfrEnableInput`<sup>Optional</sup> <a name="ixfrEnableInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput"></a>

```typescript
public readonly ixfrEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `tsigIdInput`<sup>Optional</sup> <a name="tsigIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput"></a>

```typescript
public readonly tsigIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ixfrEnable`<sup>Required</sup> <a name="ixfrEnable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable"></a>

```typescript
public readonly ixfrEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigId`<sup>Required</sup> <a name="tsigId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId"></a>

```typescript
public readonly tsigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersPeerConfig <a name="DnsZoneTransfersPeerConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.Initializer"></a>

```typescript
import { dnsZoneTransfersPeer } from '@cdktf/provider-cloudflare'

const dnsZoneTransfersPeerConfig: dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name">name</a></code> | <code>string</code> | The name of the peer. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip">ip</a></code> | <code>string</code> | IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable">ixfrEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port">port</a></code> | <code>number</code> | DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId">tsigId</a></code> | <code>string</code> | TSIG authentication will be used for zone transfer if configured. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to.

For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}

---

##### `ixfrEnable`<sup>Optional</sup> <a name="ixfrEnable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable"></a>

```typescript
public readonly ixfrEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}

---

##### `tsigId`<sup>Optional</sup> <a name="tsigId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId"></a>

```typescript
public readonly tsigId: string;
```

- *Type:* string

TSIG authentication will be used for zone transfer if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}

---



