# `magicWanIpsecTunnel` Submodule <a name="`magicWanIpsecTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanIpsecTunnel <a name="MagicWanIpsecTunnel" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktf/provider-cloudflare'

new magicWanIpsecTunnel.MagicWanIpsecTunnel(scope: Construct, id: string, config: MagicWanIpsecTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig">MagicWanIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAllowNullCipher">resetAllowNullCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetFqdnId">resetFqdnId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckDirection">resetHealthCheckDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckEnabled">resetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckRate">resetHealthCheckRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckTarget">resetHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckType">resetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHexId">resetHexId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk">resetPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetRemoteId">resetRemoteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection">resetReplayProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAllowNullCipher` <a name="resetAllowNullCipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAllowNullCipher"></a>

```typescript
public resetAllowNullCipher(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFqdnId` <a name="resetFqdnId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetFqdnId"></a>

```typescript
public resetFqdnId(): void
```

##### `resetHealthCheckDirection` <a name="resetHealthCheckDirection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckDirection"></a>

```typescript
public resetHealthCheckDirection(): void
```

##### `resetHealthCheckEnabled` <a name="resetHealthCheckEnabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckEnabled"></a>

```typescript
public resetHealthCheckEnabled(): void
```

##### `resetHealthCheckRate` <a name="resetHealthCheckRate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckRate"></a>

```typescript
public resetHealthCheckRate(): void
```

##### `resetHealthCheckTarget` <a name="resetHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckTarget"></a>

```typescript
public resetHealthCheckTarget(): void
```

##### `resetHealthCheckType` <a name="resetHealthCheckType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheckType"></a>

```typescript
public resetHealthCheckType(): void
```

##### `resetHexId` <a name="resetHexId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHexId"></a>

```typescript
public resetHexId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPsk` <a name="resetPsk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk"></a>

```typescript
public resetPsk(): void
```

##### `resetRemoteId` <a name="resetRemoteId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetRemoteId"></a>

```typescript
public resetRemoteId(): void
```

##### `resetReplayProtection` <a name="resetReplayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection"></a>

```typescript
public resetReplayProtection(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktf/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktf/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktf/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktf/provider-cloudflare'

magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicWanIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipherInput">allowNullCipherInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput">cloudflareEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput">customerEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqdnIdInput">fqdnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckDirectionInput">healthCheckDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckEnabledInput">healthCheckEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckRateInput">healthCheckRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckTargetInput">healthCheckTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.hexIdInput">hexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput">interfaceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput">pskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.remoteIdInput">remoteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput">replayProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher">allowNullCipher</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint">customerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqdnId">fqdnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckDirection">healthCheckDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckRate">healthCheckRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckTarget">healthCheckTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.hexId">hexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress">interfaceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk">psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.remoteId">remoteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection">replayProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowNullCipherInput`<sup>Optional</sup> <a name="allowNullCipherInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipherInput"></a>

```typescript
public readonly allowNullCipherInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudflareEndpointInput`<sup>Optional</sup> <a name="cloudflareEndpointInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput"></a>

```typescript
public readonly cloudflareEndpointInput: string;
```

- *Type:* string

---

##### `customerEndpointInput`<sup>Optional</sup> <a name="customerEndpointInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput"></a>

```typescript
public readonly customerEndpointInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fqdnIdInput`<sup>Optional</sup> <a name="fqdnIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqdnIdInput"></a>

```typescript
public readonly fqdnIdInput: string;
```

- *Type:* string

---

##### `healthCheckDirectionInput`<sup>Optional</sup> <a name="healthCheckDirectionInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckDirectionInput"></a>

```typescript
public readonly healthCheckDirectionInput: string;
```

- *Type:* string

---

##### `healthCheckEnabledInput`<sup>Optional</sup> <a name="healthCheckEnabledInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckEnabledInput"></a>

```typescript
public readonly healthCheckEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckRateInput`<sup>Optional</sup> <a name="healthCheckRateInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckRateInput"></a>

```typescript
public readonly healthCheckRateInput: string;
```

- *Type:* string

---

##### `healthCheckTargetInput`<sup>Optional</sup> <a name="healthCheckTargetInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckTargetInput"></a>

```typescript
public readonly healthCheckTargetInput: string;
```

- *Type:* string

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckTypeInput"></a>

```typescript
public readonly healthCheckTypeInput: string;
```

- *Type:* string

---

##### `hexIdInput`<sup>Optional</sup> <a name="hexIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.hexIdInput"></a>

```typescript
public readonly hexIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interfaceAddressInput`<sup>Optional</sup> <a name="interfaceAddressInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput"></a>

```typescript
public readonly interfaceAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pskInput`<sup>Optional</sup> <a name="pskInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput"></a>

```typescript
public readonly pskInput: string;
```

- *Type:* string

---

##### `remoteIdInput`<sup>Optional</sup> <a name="remoteIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.remoteIdInput"></a>

```typescript
public readonly remoteIdInput: string;
```

- *Type:* string

---

##### `replayProtectionInput`<sup>Optional</sup> <a name="replayProtectionInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput"></a>

```typescript
public readonly replayProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowNullCipher`<sup>Required</sup> <a name="allowNullCipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher"></a>

```typescript
public readonly allowNullCipher: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint"></a>

```typescript
public readonly cloudflareEndpoint: string;
```

- *Type:* string

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint"></a>

```typescript
public readonly customerEndpoint: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fqdnId`<sup>Required</sup> <a name="fqdnId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqdnId"></a>

```typescript
public readonly fqdnId: string;
```

- *Type:* string

---

##### `healthCheckDirection`<sup>Required</sup> <a name="healthCheckDirection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckDirection"></a>

```typescript
public readonly healthCheckDirection: string;
```

- *Type:* string

---

##### `healthCheckEnabled`<sup>Required</sup> <a name="healthCheckEnabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckEnabled"></a>

```typescript
public readonly healthCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckRate`<sup>Required</sup> <a name="healthCheckRate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckRate"></a>

```typescript
public readonly healthCheckRate: string;
```

- *Type:* string

---

##### `healthCheckTarget`<sup>Required</sup> <a name="healthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckTarget"></a>

```typescript
public readonly healthCheckTarget: string;
```

- *Type:* string

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `hexId`<sup>Required</sup> <a name="hexId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.hexId"></a>

```typescript
public readonly hexId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress"></a>

```typescript
public readonly interfaceAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

---

##### `remoteId`<sup>Required</sup> <a name="remoteId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.remoteId"></a>

```typescript
public readonly remoteId: string;
```

- *Type:* string

---

##### `replayProtection`<sup>Required</sup> <a name="replayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection"></a>

```typescript
public readonly replayProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanIpsecTunnelConfig <a name="MagicWanIpsecTunnelConfig" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.Initializer"></a>

```typescript
import { magicWanIpsecTunnel } from '@cdktf/provider-cloudflare'

const magicWanIpsecTunnelConfig: magicWanIpsecTunnel.MagicWanIpsecTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint">cloudflareEndpoint</a></code> | <code>string</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint">customerEndpoint</a></code> | <code>string</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress">interfaceAddress</a></code> | <code>string</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name">name</a></code> | <code>string</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.allowNullCipher">allowNullCipher</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description">description</a></code> | <code>string</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.fqdnId">fqdnId</a></code> | <code>string</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckDirection">healthCheckDirection</a></code> | <code>string</code> | Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckRate">healthCheckRate</a></code> | <code>string</code> | Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckTarget">healthCheckTarget</a></code> | <code>string</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.hexId">hexId</a></code> | <code>string</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#id MagicWanIpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk">psk</a></code> | <code>string</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.remoteId">remoteId</a></code> | <code>string</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection">replayProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if replay protection is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.userId">userId</a></code> | <code>string</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudflareEndpoint`<sup>Required</sup> <a name="cloudflareEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint"></a>

```typescript
public readonly cloudflareEndpoint: string;
```

- *Type:* string

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint"></a>

```typescript
public readonly customerEndpoint: string;
```

- *Type:* string

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `interfaceAddress`<sup>Required</sup> <a name="interfaceAddress" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress"></a>

```typescript
public readonly interfaceAddress: string;
```

- *Type:* string

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `allowNullCipher`<sup>Optional</sup> <a name="allowNullCipher" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.allowNullCipher"></a>

```typescript
public readonly allowNullCipher: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#allow_null_cipher MagicWanIpsecTunnel#allow_null_cipher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `fqdnId`<sup>Optional</sup> <a name="fqdnId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.fqdnId"></a>

```typescript
public readonly fqdnId: string;
```

- *Type:* string

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}

---

##### `healthCheckDirection`<sup>Optional</sup> <a name="healthCheckDirection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckDirection"></a>

```typescript
public readonly healthCheckDirection: string;
```

- *Type:* string

Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#health_check_direction MagicWanIpsecTunnel#health_check_direction}

---

##### `healthCheckEnabled`<sup>Optional</sup> <a name="healthCheckEnabled" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckEnabled"></a>

```typescript
public readonly healthCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#health_check_enabled MagicWanIpsecTunnel#health_check_enabled}

---

##### `healthCheckRate`<sup>Optional</sup> <a name="healthCheckRate" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckRate"></a>

```typescript
public readonly healthCheckRate: string;
```

- *Type:* string

Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#health_check_rate MagicWanIpsecTunnel#health_check_rate}

---

##### `healthCheckTarget`<sup>Optional</sup> <a name="healthCheckTarget" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckTarget"></a>

```typescript
public readonly healthCheckTarget: string;
```

- *Type:* string

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#health_check_target MagicWanIpsecTunnel#health_check_target}

---

##### `healthCheckType`<sup>Optional</sup> <a name="healthCheckType" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#health_check_type MagicWanIpsecTunnel#health_check_type}

---

##### `hexId`<sup>Optional</sup> <a name="hexId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.hexId"></a>

```typescript
public readonly hexId: string;
```

- *Type:* string

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#hex_id MagicWanIpsecTunnel#hex_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#id MagicWanIpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk"></a>

```typescript
public readonly psk: string;
```

- *Type:* string

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `remoteId`<sup>Optional</sup> <a name="remoteId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.remoteId"></a>

```typescript
public readonly remoteId: string;
```

- *Type:* string

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#remote_id MagicWanIpsecTunnel#remote_id}

---

##### `replayProtection`<sup>Optional</sup> <a name="replayProtection" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection"></a>

```typescript
public readonly replayProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if replay protection is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/magic_wan_ipsec_tunnel#user_id MagicWanIpsecTunnel#user_id}

---



